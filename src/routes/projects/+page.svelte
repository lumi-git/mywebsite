<script lang="ts">
	import Aos from 'aos';
    import { onMount } from 'svelte';

	import {  LinkIcon } from 'svelte-feather-icons';

    function setUrl(){
	let bar = document.getElementsByClassName("NavUrl");
	for (let i = 0; i < bar.length; i++) {
		bar[i].textContent = "Projects";
	}

}
    onMount(() => {
        setUrl()
        Aos.init();
	})
</script>

<svelte:head>
    <title>Projects - Ronan Tremoureux</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<h1 class = "text-center text-7xl pt-10 pb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-4 ">Projects sample</h1>

<div id = itemsHolder class = "overflow-hidden p-10" >
    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 
        
        <a href = "/projects/RobotLanguage">
            <div class = "items-center text-center rounded-2xl RobotLanguage bg-opacity-60 w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm ">
            
                <img src = "javascriptLogo.png" class = " flex  w-10 " alt = "Python" />
                <h1 class = "tc1 text-3xl sm:text-7xl  m-6" >Roomba simulator</h1>
                <p class = "tc1 text-center">A robot sandbox simulator powered by a from-scratch created language, developed with langium</p>
                <a href = "/projects/RobotLanguage" class = "btn  m-6">About it </a>
            
            </div>
        </a>
    </div>


    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 
        
        <a href = "/projects/quickqr">
            <div class = "items-center text-center rounded-2xl quickqr bg-opacity-60 w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
            
                <img src = "javascriptLogo.png" class = " flex  w-10 " alt = "Python" />
                <h1 class = "tc1 text-3xl sm:text-7xl  m-6" >quickQR</h1>
                <p class = "tc1 text-center">A ultra ligth design for qr code generator</p>
                <a href = "/projects/quickqr" class = "btn  m-6">About it </a>
            
            </div>
        </a>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 
        <div class = "items-center text-center c3   bg-opacity-60   rounded-2xl  w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
            <img src = "javascriptLogo.png" class = " flex justify-center w-10 " alt = "C++"/>
            
            <h1 class = "tc1 text-3xl sm:text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6" >GameScript</h1>
            <p class = "tc1 text-center">A javascript/typescript optimized game library</p>
            <a href = "/projects/gamescript" class = "btn  m-6">About it </a>
        </div>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-left"> 
        <a href = "/projects/PyGine">
        <div class = "items-center text-center c1 bg-opacity-60 rounded-2xl w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
          
            <img src = "pytonLogo.png" class = " flex  w-10 " alt = "Python" />
            <h1 class = "tc1 text-3xl sm:text-7xl  m-6" >Python game lib</h1>
            <p class = "tc1 text-center">A Game library called PyGine, in Python</p>
            <a href = "/projects/PyGine" class = "btn  m-6">About it </a>
        
        </div>
    </a>
    </div>


    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 
        <a href = "/projects/WhileCompiler">
        <div class = "items-center text-center c2   bg-opacity-60   rounded-2xl  w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
            <img src = "javaLogo.png" class = " flex justify-center w-20" alt = "Java"/>
            
            <h1 class = "tc1 text-3xl sm:text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6" >Language Compiler</h1>
            <p class = "tc1 text-center">A compiler for an arbitrary language in java</p>
            <a href = "/projects/WhileCompiler" class = "btn  m-6">About it </a>
        </div>
        </a>
    </div>


    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-left"> 
        <div class = "items-center text-center c3   bg-opacity-60   rounded-2xl  w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
            <img src = "c++Logo.png" class = " flex justify-center w-10 " alt = "C++"/>
            
            <h1 class = "tc1 text-3xl sm:text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6" >Ant Farm</h1>
            <p class = "tc1 text-center">An ant farm simulation in C++ with graphics</p>
            <a href = "/projects/AntFarm" class = "btn  m-6">About it </a>
        </div>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 

        <div class = " Link items-center text-center bg-opacity-60 rounded-2xl w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
            <LinkIcon  class = " flex justify-center w-12 h-12" />
            <h1 class = "tc1 text-3xl sm:text-7xl  m-6" >Others Websites</h1>
            <p class = "tc1 text-center"> Redirection to others websites/API </p>
            <a href = "/projects/OthersWebsites" class = "btn  m-6">About it </a>
        
        </div>
    </div>


    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-left"> 
        <div class = " items-center text-center c4 bg-opacity-60   rounded-2xl  w-1/2 m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
            <img src = "javascriptLogo.png" class = " flex justify-center w-10  " alt = "Javascript" />
            <h1 class = "tc1 text-3xl sm:text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6">Dot Connection</h1>
            <div>
                <p class = "tc1 text-center">A simple demo - Dot connection lead by p5 library in JS</p>
            </div>
            <a href = "/projects/P5Connections" class = "btn m-6">Try it </a>
        </div>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

    <div data-aos="slide-right"> 
        <div class = "items-center text-center c5 bg-opacity-60   rounded-2xl  w-1/2  m-auto p-5 min-w-fit hover:scale-[1.01] duration-100 shadow-black shadow-sm">
            <img src = "javascriptLogo.png" class = " flex justify-center w-10 " alt = "Javascript" />
            <h1 class = "tc1 text-3xl sm:text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 m-6" >Ballons</h1>
            <p class = "tc1 text-center">A simple demo - Ballon simulation lead by p5 library in JS</p>
            <a href = "/projects/P5Ballon" class = "btn m-6">Try it </a>
        </div>
    </div>

    <div class="divider w-20 m-auto mt-20 mb-20"></div> 

</div>


