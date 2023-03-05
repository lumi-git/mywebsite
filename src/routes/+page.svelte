<script lang="ts">
      import { AirplayIcon, ArrowDownIcon, AtSignIcon,CalendarIcon,ClockIcon,DatabaseIcon,GithubIcon,MapIcon,SearchIcon } from 'svelte-feather-icons'


      //script for emailjs
      import emailjs from '@emailjs/browser';
      function sendEmail(e) {
      emailjs.send("service_oygafy5","template_7u0r2ki",{
      from_name: document.getElementById("email").value,
      to_name: "WebsitePerso",
      message: document.getElementById("message").value,
      subject: document.getElementById("subject").value,
      },"deo-7Gb6aCtI4A3aj").then(function(response) {
          console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
      });
      }
      import { afterUpdate, onMount } from 'svelte';
	import AOS from 'aos';
    
    function setUrl(){
	let bar = document.getElementsByClassName("NavUrl");
	for (let i = 0; i < bar.length; i++) {
		bar[i].textContent = "Home Page";
	}

}

    onMount(() => {
        setUrl()
		AOS.init()
	})

</script>

<svelte:head>
    <title>Home - Ronan Tremoureux</title>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<svelte:window on:scroll={setUrl} />

<div class = " min-h-screen grid justify-center" >
    <div class = "m-auto" >

        <div class = "ml-5 mr-5 text-center">
            <p class = "text-5xl  ">
                Hi ! I am <clr class = "duration-700 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-cyan-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-200 hover:to-cyan-500  transition-color ">Ronan Tremoureux </clr> 

            </p>

            <p class = "text-4xl mt-7 ">
                Student in software engineering school
            </p>

            <p class = "text-4xl mt-7 ">
                Discover more about myself by visiting this website ! 
            </p>
        </div>
        
    </div>
    <a href = "#section_2" class = "scroll-smooth mx-auto  ">
        <div class = "bg-cyan-600 rounded-full h-fit w-fit  hover:translate-y-2 duration-500 tooltip tooltip-bottom group animate-pulse hover:animate-none " data-tip="Continue ! " >
            
            <ArrowDownIcon size="38" class = "m-5 text-stone-900 group-hover:stroke-white "  />  
        
        </div>
    </a>
</div>

<div id = "section_2"></div>
<div  class = "" >


</div>
<h1 class = "text-center  text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-10 " >RONAN TREMOUREUX</h1>

<h2 class = "text-center  text-4xl ms:text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 my-10"> French Software - fullStack Developer</h2>

<div class="flex w-full justify-center">
    <div class = "pr-10">
        <div class="mockup-window bg-base-200 border border-indigo-400 border-opacity-50 border-dashed ">
            <div class = " grid place-items-center ">
                <MapIcon size="38"/>

                <p class = "text-4xl">Current Status</p>
                </div>
            <div class="flex justify-center  bg-base-200 pl-10 pr-10">

                <div class="grid flex-grow rounded-box place-items-center  m-5 w-1/2">
                <div class ="m-1"></div>
                <p>Second year in software engineering school at ESIR</p>
                <p>Located at Rennes1 University From France </p>
                <div class ="m-1"></div>
                    
                <ClockIcon size="20"/>
        
                <p> Graduated in 2024</p>

                </div>

            </div>
        </div>
    </div>

    <div class="divider divider-horizontal"></div>

    <div class = "pl-10">
        <div class="mockup-window border bg-base-200 border-indigo-400 border-opacity-50 border-dashed ">
            <div class = " grid place-items-center  ">
                <SearchIcon size="38"/>

                <p class = "text-4xl">Current Research</p>
                </div>
            <div class="flex justify-center  bg-base-200 pl-10 pr-10">


                <div class="flex-grow card rounded-box place-items-center m-5 w-1/2 " >
                    
                    <div class ="m-1"></div>
            
                    <p>Searching an internship abroad (out of France) for 4 month</p>
                    <p>in software or web developement.</p>
                    <div class ="m-1"></div>
                    <CalendarIcon size="20"/>
                    <p> From early June to end of september 2023</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class = "content-center  items-center flex m-10 " data-aos="zoom-in" >
    <div class="card w-1/2 bg-indigo-300 bg-opacity-40 shadow-xl m-auto min-w-fit  ">

        <div class="card-body items-center text-center">
          <h2 class="card-title text-7xl">RESUME</h2>
          <p >A summurized version of this website ? Here is my resume !</p>

          <div class = "">
            <div class="card-actions float-right p-2">
                <a class="btn btn-primary bg-indigo-500 border-indigo-500 " download href = "CV.pdf" target = "_blank" rel="noreferrer noopener">Download</a>  
            </div>
                <div class="card-actions float-left p-2">
                    <a class="btn btn-primary" href = "/resumepreview" rel="noreferrer noopener">Preview</a>  
                </div>
            </div>
        </div>
      </div>
</div>



<div class="divider "></div> 

<div data-aos="fade-up" >
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">        
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Me at Contact@ronantremoureux.fr</h2>
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Interrested in my profile ? leave me a message i'll answer the fastest as possible.</p>
            <form action="#" class="space-y-8" on:submit|preventDefault={sendEmail}>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain" required>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Sujbect" required>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave Your message Here"></textarea>
                </div>
                <button type="submit" class=" btn py-3 px-5 text-sm font-medium text-center dark:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send your message</button>
            </form>
        </div>
    </section>
</div>