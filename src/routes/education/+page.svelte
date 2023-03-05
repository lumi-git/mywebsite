<script>
	import EducationTimeline from "$lib/EducationTimeline.svelte";
    import { onMount } from 'svelte';
    function setUrl(){
	let bar = document.getElementsByClassName("NavUrl");
	for (let i = 0; i < bar.length; i++) {
		bar[i].textContent = "Education";
	}

}
    onMount(() => {
        setUrl()

	})

</script>

<svelte:head>
    <title>Education - Ronan Tremoureux</title>

</svelte:head>

<div class = "block sm:flex justify-center   ">
    <h1 class = "text-center text-7xl pt-10 pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-4 sm:mr-5">Education</h1>
    
    <h1 class = "hidden sm:flex text-center text-7xl pt-10 pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 sm:m-4  "> / </h1>

    <h1 class = "text-center text-7xl pt-10 pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 sm:mt-4 ">Job</h1>
</div>

<div class=" w-20 m-auto mt-10 mb-20"></div> 



<EducationTimeline></EducationTimeline>