<script lang="ts">
    import GameBox from '$lib/GameBox.svelte';
    import Nav from '../../../lib/Nav.svelte';
</script>


<Nav />




<h2 class = "text-center text-2xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">A simple ballon project with p5</h2>


<div> 
    <div class = " ml-32">
        <a href = "/projects" class = "btn bg-error">Back to projects</a>
    </div>
</div>

<div class = " flex justify-center">

    <a>LeftClick to free ballons</a>

</div>


<div class = " flex justify-center">
    <GameBox />
</div>

