<script lang="ts">
   import '../app.css' 
   import Navbar from '$lib/components/navbar.svelte';
</script>
<div class="flex flex-col bg-slate-900 min-h-screen h-full"  >
    <Navbar />
    <main>
        <slot />
    </main>
    <!-- TODO: add Footer here --> 
</div>