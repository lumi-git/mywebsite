<script lang="ts">
    import { onMount } from 'svelte';

    function setUrl(){
		let bar = document.getElementsByClassName("NavUrl");
		for (let i = 0; i < bar.length; i++) {
			bar[i].textContent = "Projects / Compiler";
		}
	
	}

onMount(() => {
    setUrl();
})
</script>



<h2 class = "text-center text-2xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">Roombat Simulator</h2>



<div> 
    <div class = " ml-32">
        <a href = "/projects" class = "btn bg-error">Back to projects</a>
    </div>
</div>



<div class = " flex justify-center p-20">



    <a href = "https://robot.ronantremoureux.fr/" target = "_blank" rel="noreferrer noopener" class = "text-5xl p-5 bg-zinc-800 rounded-lg drop-shadow-xl hover:scale-[1.05]">Click here to try the simulator !</a>



</div>



<div class = " flex justify-center">

    <p>This page is not finished yet stay tuned !</p>

</div>


