import { writable, type Readable, derived } from "svelte/store";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

function userStore(){
    let unsubscribe: () => void;
    const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) =>  {
            set(user)
        })
        return () => unsubscribe()
    })
    return {
        subscribe
    }
}

export const user = userStore()

export function docStore<G>(path: string){
    const docRef = doc(db, path ) 

    let unsubscribe: () => void;
    const { subscribe } = writable<G | null>(null, (set) => {
        unsubscribe = onSnapshot(docRef, (snapshot) => {
            set((snapshot.data() as G) ?? null)
        })
        return () => unsubscribe()
    })
    return {
        subscribe
    }
}

interface Userdata{
    username: string;
    goals: Array<Task>;
    uid: any;
}
interface Task{
    startDate: string;
    duration: number;
    finished: boolean;
    amount: number;
    currentAmount: number;
    subGoals: Array<Task> | null;
}

export const userData: Readable<Userdata | null> = derived(user, ($user, set) => {
    if ($user) {
        return docStore<Userdata>(`users/${$user.uid}`).subscribe(set);
    }else{
        set(null)
    }
}) 

