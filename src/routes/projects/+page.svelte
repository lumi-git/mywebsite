<script lang="ts">
    import { onMount } from 'svelte';
	import AOS from 'aos';
	import { Link2Icon, LinkIcon } from 'svelte-feather-icons';


    onMount(() => {
		AOS.init()
	})
</script>

<svelte:head>
    <title>Projects - Ronan Tremoureux</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<h1 class = "text-center text-7xl pt-10 pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-4 ">Projects sample</h1>





<div id = itemsHolder >






    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-left"> 

        <div class = "items-center card c1 bg-opacity-60 rounded-2xl w-1/2 m-auto p-5 min-w-fit ">
          
            <img src = "pytonLogo.png" class = " flex  w-10 " />
            <h1 class = "tc1 text-7xl  m-6" >Python game lib</h1>
            <a class = "tc1 ">A Game library called PyGine, in Python</a>
            <a href = "/projects/PyGine" class = "btn  m-6">About it </a>
        
        </div>
    </div>


    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 
        <div class = "items-center  card c2   bg-opacity-60   rounded-2xl  w-1/2 m-auto p-5 min-w-fit">
            <img src = "javaLogo.png" class = " flex justify-center w-20" />
            
            <h1 class = "tc1 text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6" >Language Compiler</h1>
            <a class = "tc1">A compiler for an arbitrary language in java</a>
            <a href = "/projects/WhileCompiler" class = "btn  m-6">About it </a>
        </div>
    </div>


    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-left"> 
        <div class = "items-center  card c3   bg-opacity-60   rounded-2xl  w-1/2 m-auto p-5 min-w-fit">
            <img src = "c++Logo.png" class = " flex justify-center w-10 " />
            
            <h1 class = "tc1 text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6" >Ant Farm</h1>
            <a class = "tc1">An ant farm simulation in C++ with graphics</a>
            <a href = "/projects/AntFarm" class = "btn  m-6">About it </a>
        </div>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 

        <div class = "items-center Link card bg-opacity-60 rounded-2xl w-1/2 m-auto p-5 min-w-fit border">
            <LinkIcon  class = " flex justify-center w-12 h-12" />
            <h1 class = "tc1 text-7xl  m-6" >Others Websites</h1>
            <a class = "tc1 "> Redirection to others websites/API </a>
            <a href = "/projects/OthersWebsites" class = "btn  m-6">About it </a>
        
        </div>
    </div>


    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-left"> 
        <div class = " items-center card c4 bg-opacity-60   rounded-2xl  w-1/2 m-auto p-5 min-w-fit">
            <img src = "javascriptLogo.png" class = " flex justify-center w-10  " />
            <h1 class = "tc1 text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6">Dot Connection</h1>
            <div>
                <a class = "tc1">A simple demo - Dot connection lead by p5 library in JS</a>
            </div>
            <a href = "/projects/P5Connections" class = "btn  m-6">Try it </a>
        </div>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 
        <div class = "items-center  card c5 bg-opacity-60   rounded-2xl  w-1/2  m-auto p-5 min-w-fit ">
            <img src = "javascriptLogo.png" class = " flex justify-center w-10 " />
            <h1 class = "tc1 text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6" >Ballons</h1>
            <a class = "tc1">A simple demo - Ballon simulation lead by p5 library in JS</a>
            <a href = "/projects/P5Ballon" class = "btn m-6">Try it </a>
        </div>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

</div>


