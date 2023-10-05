<script lang="ts">
	import Navbtn from "./ui/navbtn.svelte";
    import Dialog from "./ui/dialog.svelte";

    const navBtnsLeft = [
        {title: 'Pricing', url: '/pricing'},
        {title: 'About', url: '/about'},
        {title: 'filler', url: '/404doesnotexist'},
    ]

</script>
<div class="fixed top-0 z-50 flex justify-around w-full h-[64px] bg-inherit border-b border-slate-700 opacity-80">
    <div class="flex items-center">
        <a href="/" class="flex items-center font-bold h-full  text-white text-2xl  p-4 ">
            Logo
        </a>
        {#each navBtnsLeft as navbtnleft}
            <Navbtn {...navbtnleft} />
        {/each}
    </div>
    <Dialog />

    

</div>