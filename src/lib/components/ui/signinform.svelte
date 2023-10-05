<script lang="ts">
    import { db } from '$lib/firebase'
    import { auth } from '$lib/firebase';
    import { signInWithPopup, signInWithEmailAndPassword, signOut, GoogleAuthProvider} from 'firebase/auth';
    import { writeBatch, doc } from 'firebase/firestore';

    export let closeModal: () => void;
    


    async function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        const poop = await signInWithPopup(auth, provider)
        const user = poop.user;

        const batch = writeBatch(db)
        batch.set(doc(db, "users", user.uid), {
            goals: [],
            username: user.displayName,
            uid: user.uid
        })
        await batch.commit()
        console.log(user)
        
        closeModal()
    }

    async function signInWithEmail(){
        //TODO: implement sign in with email and password logic
    }

</script>

<style>
    .trans{
        transform: translateY(-2rem);
        transform-origin: 0%;
        transition: transform 400ms;
    }
    .field:focus-within .trans{
        transform: scale(0.5) translateY(-5rem);
    }

</style>

<form on:submit|preventDefault={signInWithEmail}>
    <div class="relative w-full mt-7 border-b-2 border-zinc-50 border-dashed
    field">
        <input type="email" name="email" id="email" class="outline-none border-none bg-inherit small-text
        overflow-hidden text-[1.2rem] font-semibold valid:text-green-500 invalid:text-red-500
        w-full">
        <label for="email" class="medium-text -z-10 absolute trans top-6 left-0">Email</label>
    </div>
    <div class="relative w-full mt-14 border-b-2 border-zinc-50 border-dashed
    field">
        <input type="password" name="password" id="password" class="outline-none border-none bg-inherit small-text
        overflow-hidden text-[1.2rem] font-semibold w-full">
        <label for="password" class="medium-text -z-10 absolute trans top-6 left-0">Password</label>
    </div>
    <button type='submit' class="bg-red-600 rounded-full border-2 border-red-400 hover:bg-red-400 
    transition duration-200 w-full p-2 medium-text flex justify-center items-center cursor-pointer my-4 ">
        Sign in
    </button>
    <button class="bg-inherit rounded-full border-2 border-zinc-50 hover:bg-slate-600 cursor-pointer
    transition duration-200 flex justify-center items-center p-2 w-full" on:click|preventDefault={signInWithGoogle}>
        <p class="medium-text mr-1">Sign in with </p>
        <svg class="rounded-full" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 24 24" width="30"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
        <p class="medium-text">oogle</p>
    </button>
</form>