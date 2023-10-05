<script lang="ts">
    export let title: string;
    export let url: string;
</script>
<a href={url} class="h-full bg-inherit flex items-center p-4 medium-text border-b-2 border-slate-900 hover:text-red-700
 hover:border-b-2 transition duration-200
hover:border-red-700">
    {title}
</a>