<script lang="ts">
    import Signinform from "./signinform.svelte";
    import { user, userData } from "$lib/stores";    

    let model: HTMLDialogElement;


    function openModal(){
        model.showModal()
    }
    function closeModal(){
        model.close()
    }
</script>
<div class="flex items-center gap-2">
    {#if $user}
        <a  class="px-2.5 py-1 rounded  relative justify-center items-center bg-inherit border border-slate-700 cursor-pointer shadow-none hover:bg-slate-600 hover:shadow-sm hover:shadow-slate-600 small-text transition duration-200" href={`/${$userData?.uid}/settings`} >
            {$userData?.username}
        </a>
        <a  class="px-2.5 py-1 rounded relative justify-center items-center bg-red-600 border border-red-400
        cursor-pointer small-text hover:bg-red-400 transition duration-200 "  href="/dashboard" >
            Make your goals NOW
        </a>
    {:else}
        <button  class="px-2.5 py-1 rounded  relative justify-center items-center bg-inherit border border-slate-700 cursor-pointer shadow-none hover:bg-slate-600 hover:shadow-sm hover:shadow-slate-600 small-text transition duration-200" on:click={openModal}>
            Sign in
        </button>
        <button  class="px-2.5 py-1 rounded relative justify-center items-center bg-red-600 border border-red-400
        cursor-pointer small-text hover:bg-red-400 transition duration-200 " on:click={openModal}>
            Start making goals
        </button>
    {/if}
    <dialog bind:this={model} class="bg-slate-900 rounded-xl border border-slate-700 shadow-md shadow-slate-700
    relative bottom-10 w-1/3 h-fit" >
        <div class="flex flex-col">
            <div class="flex justify-between p-3">
                <h1 class="big-text">Sign in</h1>
                <button on:click={closeModal}>
                    <svg viewBox="0 0 24 24" class="w-6 h-6 " style="color: rgb(239, 243, 244);" ><g><path fill="rgb(250, 250, 250)" d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path></g></svg>
                </button>
            </div>
            <div class="px-3 pb-3 pt-0">
                <Signinform  {closeModal}/>
            </div>
        </div>
    </dialog>
</div>