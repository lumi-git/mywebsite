<script lang="ts">
    import { onMount } from 'svelte';
	import AOS from 'aos';
	function setUrl(){
		let bar = document.getElementsByClassName("NavUrl");
		for (let i = 0; i < bar.length; i++) {
			bar[i].textContent = "About";
		}
	
	}
    onMount(() => {
        setUrl()
        AOS.init();

	})

</script>

<svelte:head>
    <title>About - Ronan Tremoureux</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>




<h1 class = "text-center text-7xl pt-10 pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-4 ">What's new ?</h1>

<div class="divider w-20 m-auto mt-20 mb-20"></div> 


<h2 class = "text-center text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">Contests</h2>
<div class="flex w-full">

    <a class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 w-1/2" href = "https://swerc.eu/2022/theme/scoreboard/public/" target="_blank" rel="noreferrer noopener">

    <div class = "card-title">SWERC 2023</div>
    <div class = "card-body">
        I paticipate with my team "PBI" at the ICPC Swerc 2023 at Milano, Italy
    </div>


</a>

</div>

<div class="flex w-full">


    <a class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 w-1/2" href = "https://breakthecode.soprasteria.fr" target="_blank" rel="noreferrer noopener">

        <div class = "card-title">Break The Code 2022</div>
        <div class = "card-body">
            I paticipate with my team at the break the code 2022 At rennes managed by Soprasteria
        </div>
    </a>
</div>

<div class="block sm:flex w-full" >


    <a data-aos-offset= "200" data-aos="zoom-in-down" class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 my-5 mx-auto w-1/2" href = "https://le-shaker.com/coding-battle/" target="_blank" rel="noreferrer noopener">

        <div class = "card-title">Coding Battle </div>
        <div class = "card-title">2019 - 2022</div>
        <div class = "card-body">
            Online coding competition
        </div>
    </a>

    <a data-aos-offset= "280" data-aos="zoom-in-down" class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 my-5 mx-auto w-1/2" href = "#" target="_blank" rel="noreferrer noopener">

        <div class = "card-title">Battle Dev</div>
        <div class = "card-title">2019</div>
        <div class = "card-body">
            Online coding competition
        </div>
    </a>

</div>

<div class = "divider m-10"></div>

<h2 data-aos="slide-left" class = "text-center text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-32 p-5">In Coming..</h2>
