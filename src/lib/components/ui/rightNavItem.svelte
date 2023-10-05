<script lang="ts">
    export let url: string | null; 
</script>
{#if url}
    <a href={url} class="p-3">
        <slot />
    </a>
{:else}
    <button on:click={() => alert('I forgot to put shit in here, sorry for the inconvinence')}>
        <slot />
    </button>
{/if}