<script lang="ts">
	import DotConnection from '$lib/DotConnection.svelte';
    import { onMount } from 'svelte';

    function setUrl(){
		let bar = document.getElementsByClassName("NavUrl");
		for (let i = 0; i < bar.length; i++) {
			bar[i].textContent = "Projects / Dots";
		}
	
	}

    onMount(() => {
        setUrl();
    })
</script>







<h2 class = "text-center text-2xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">A Dot Connection project with p5</h2>


<div> 
    <div class = " ml-32">
        <a href = "/projects" class = "btn bg-error"> Back to projects</a>
    </div>
</div>


<div class = " flex justify-center">
    <DotConnection />
</div>
