<script lang="ts">
    import { onMount } from 'svelte';
	import AOS from 'aos';
	function setUrl(){
		let bar = document.getElementsByClassName("NavUrl");
		for (let i = 0; i < bar.length; i++) {
			bar[i].textContent = "Skills";
		}
	
	}
    onMount(() => {
        setUrl()
		AOS.init()
	})
</script>

<svelte:head>
    <title>Skills - Ronan Tremoureux</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<h1 class = "text-center text-7xl pt-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-4 ">My differents Skills</h1>

<div class="divider w-20 m-auto mt-20 mb-20">  </div> 

<div class="sm:flex block w-full">

    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 sm:w-1/2"data-aos="fade-up">
        <div class = "card-title">Team Working</div>
        <div class = "card-body text-center text-xl  ">
            During my studies, we have been trained to work in a team. It helps me to developed my ability to work in a team and to communicate with others.
            I also used this ability during my internship at
            <a href = "https://www.se.com/ww/en/" target = "_blank">Shneider Electric.</a>
        </div>
    </div>

    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 sm:w-1/2" data-aos="fade-up">
        <div class = "card-title">Organized</div>
        <div class = "card-body text-center text-xl  ">
            A key word for me is organization. The deference between a good and a bad project is the organization.
        </div>
    </div>

</div>

<div class="sm:flex block  w-full">

    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 sm:w-1/2" data-aos="fade-up">
        <div class = "card-title">Curious</div>
        <div class = "card-body text-center text-xl  ">
            As I am a developper I need to be aware of the new technologies on the market. I am always need to learn new things and to improve my skills. 
        </div>
    </div>

    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 sm:w-1/2" data-aos="fade-up">
        <div class = "card-title">Problem-Solving</div>
        <div class = "card-body text-center text-xl  ">
            What i like in Probleme solving is is the step by step approach.
            First analyse the situation, provide a plan, and then execute the plan.
        </div>
    </div>

</div>

<div class="sm:flex block  w-full " data-aos="fade-up">

    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 sm:w-1/2 ">
        <div class = "card-title">Autodidact</div>
        <div class = "card-body text-center text-xl">
            Among the technologies I use, there is a lot i learned by myself, by making projects with them.
            Practicing is for me the best way to learn something, this approach helps me to have a better understanding of the technologies I use. 
        </div>
    </div>
</div>

<div class="divider w-20 m-auto"></div> 

<h2 class = "text-center text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">Certifications</h2>


<div class="sm:flex  block w-full min-w-fit " data-aos="fade-up-right">

    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 sm:w-1/2" >

    <div class = "card-title">ETS TOEIC</div>
    <div class = "card-body text-xl">
        With a score of 885, I have the TOEIC certificate with B2 level 
    </div>

    <div class="flex rounded  p-2">

        <div class="grid rounded-box place-items-center p-2  sm:w-1/2">
            <p class = "text-2xl mb-5">Speaking</p>
            <p>455</p> </div>  
        <div class = "divider divider-horizontal "></div>
        
        <div class="grid rounded-box place-items-center p-2  sm:w-1/2">
            <p class = "text-2xl mb-5">Writing</p>
            <p>430</p> 
        </div>  
    </div>

</div>


    <div class="grid flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 w-1/2 min-w-fit" data-aos="fade-up-left">

        <div class = "card-title">Electrical Habilitation</div>
        <div class = "card-body text-xl">
            level B01V
        </div>
    </div>

</div>

<div class="divider w-20 m-auto mt-20 mb-20"></div> 

<h2 class = "text-center text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5 p-2" data-aos="fade" >Working Tools</h2>

<!-- programming language window -->
<div class="flex w-full pb-10" data-aos="fade-up">

    <div class="flex-grow  mockup-window bg-gray-700     bg-opacity-50 rounded-box place-items-center p-5 m-10 w-1/2 ">

        <div class = "card-body text-center text-xl">
            <div class = "text-5xl "> &#60 Programing languages /&#62; </div>
            <div class = "flex justify-center">
                <img src = "c++Logo.png" class = "w-1/12 h-1/12 p-3 my-auto" data-aos = "fade" data-aos-delay="0" alt = "C++"/>
                
                <img src = "C_Logo.png" class = "w-1/12 h-1/12 p-3 my-auto" data-aos = "fade" data-aos-delay="100" alt = "C" />

                <img src = "Csharp_Logo.png" class = "w-1/12 h-1/12  my-auto" data-aos = "fade" data-aos-delay="200"  alt = "C#" />

                <img src = "HTML5_logo.png" class = "w-1/12 h-1/12 p-3 my-auto" data-aos = "fade" data-aos-delay="300" alt = "Html" />

                <img src = "javascriptLogo.png" class = "w-1/12 h-1/12 p-3 my-auto" data-aos = "fade" data-aos-delay="400" alt = "JavaScript" />

                <img src = "pytonLogo.png" class = "w-1/12 h-1/12 p-3 my-auto" data-aos = "fade" data-aos-delay="500" alt = "Python" />

                <img src = "javaLogo.png" class = "w-1/12 h-1/12 p-3 my-auto" data-aos = "fade" data-aos-delay="600" alt = "Java" />

            </div>
        </div>
    </div>
</div>


<div class="flex w-full pb-10" data-aos="fade-up">

    <div class="flex-grow  mockup-window bg-gray-700 bg-opacity-50 rounded-box place-items-center p-5 m-10 w-1/2 ">

        <div class = "card-body text-center text-xl">
            <div class = "text-5xl "> IDE </div>
            <div class = "flex justify-center">

                <img src = "jetbrains_logo.webp" class = "w-1/12 h-1/12 p-3 my-auto mx-10" data-aos = "fade" data-aos-delay="0" alt = "jetbrains"/>

                <img src = "vs_Logo.png" class = "w-1/12 h-1/12 mx-10 my-auto" data-aos = "fade" data-aos-delay="200"  alt = "VisualStudioCode" />
            </div>
        </div>
    </div>
</div>


<div class="flex w-full pb-10" data-aos="fade-up">

    <div class="flex-grow  mockup-window bg-gray-700 bg-opacity-50 rounded-box place-items-center p-5 m-10 w-1/2 ">

        <div class = "card-body text-center text-xl">
            <div class = "text-5xl mb-5"> Operating systems </div>
            <div class = "flex justify-center">

                <img src = "Windows_logo.png" class = "w-1/12 h-1/12 p-3 my-auto mx-10" data-aos = "fade" data-aos-delay="0" alt = "Windows"/>

                <img src = "MacOS_logo.png" class = "w-1/12 h-1/12 mx-10 my-auto" data-aos = "fade" data-aos-delay="150"  alt = "MacOS" />
                <img src = "Linux-Logo.png" class = "w-2/12 h-2/12  my-auto" data-aos = "fade" data-aos-delay="300"  alt = "Linux" />
            </div>
        </div>
    </div>
</div>