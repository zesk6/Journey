<script lang="ts">
    import RightNavItem from "./ui/rightNavItem.svelte";
    import RightNavItemContent from "./ui/rightNavItemContent.svelte";

    const items = [
        {title: "Progress", photo:"", url:"/graphs" },
        {title: "List", photo:"", url:"/goals" },
        {title: "Filler", photo:"", url: null },
        {title: "YouTube", photo:"", url:"https://www.youtube.com" },
        {title: "Github", photo:"", url:"https://www.github.com" },
    ]
</script>
<div class="fixed left-0 top-0 w-16 flex flex-col border-r border-slate-700 items-center justify-between bg-slate-800">
    <div class="flex flex-col items-center gap-3">
        {#each items as item }
        <RightNavItem url={item.url}>
            <RightNavItemContent title={item.title} photo={item.photo}/>
        </RightNavItem>
        {/each}
    </div>
</div>
