<script lang="ts">
    import { onMount } from 'svelte';

	function setUrl(){
		let bar = document.getElementsByClassName("NavUrl");
		for (let i = 0; i < bar.length; i++) {
			bar[i].textContent = "Projects / Websites";
		}
	}
    onMount(() => {
        setUrl();
    })

</script>





<h1 class = "text-center  text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">Redirections to my webstites</h1>

<div class = "grid justify-center m-10">

    <p class = "text-xl "> 
        These are some of my websites. I use them to test new technologies and to learn new things. These are not meant to be beautyfull.
    </p>

</div>

<div> 
    <div class = " ml-32">
        <a href = "/projects" class = "btn bg-error">Back to projects</a>
    </div>
</div>



<div class="divider w-20 m-auto mt-20 mb-20"></div> 

<div class = "items-center card bg-opacity-60 rounded-2xl w-1/2 m-auto p-5 min-w-fit border ">
    <h1 class = " text-7xl  m-6" >University Mobility map </h1>
    <p>World map showing locations of old internship done by</p>
    <p>University students all over the world</p>
    <p> Helping with precious informations about the location and local contacts</p>
    <a href = https://esir-mobility-map.vercel.app/map class = "btn  m-6" target = "_blank" rel="noreferrer noopener">Visit it !</a>
</div>

<div class="divider w-20 m-auto mt-20 mb-20"></div> 

<div class = "items-center card bg-opacity-60 rounded-2xl w-1/2 m-auto p-5 min-w-fit border">
    <h1 class = " text-7xl  m-6" >Next.js app</h1>
    <p class = " "> Testing Next.js in a simple website. Discovering the technology</p>
    <a href = https://next.ronantremoureux.fr class = "btn  m-6" target = "_blank" rel="noreferrer noopener">Visit it !</a>
</div>


<div class="divider w-20 m-auto mt-20 mb-20"></div> 

<div class = "items-center card bg-opacity-60 rounded-2xl w-1/2 m-auto p-5 min-w-fit border">
    <h1 class = " text-7xl  m-6" >Roomba simulator sandbox</h1>
    <p class = " "> A robot sandbox simulator </p>
    <a href = https://robot.ronantremoureux.fr class = "btn  m-6" target = "_blank" rel="noreferrer noopener">Visit it !</a>
</div>
