<script lang="ts">
import Nav from '../lib/Nav.svelte';
import emailjs from '@emailjs/browser';

import { AirplayIcon, AtSignIcon,MapIcon,SearchIcon } from 'svelte-feather-icons'
function sendEmail(e) {

    emailjs.send("service_oygafy5","template_7u0r2ki",{
from_name: document.getElementById("email").value,
to_name: "Ronan",
message: document.getElementById("message").value,
subject: document.getElementById("subject").value,
},"deo-7Gb6aCtI4A3aj").then(function(response) {
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
});
}

</script>

<Nav />

<h1 class = "text-center text-6xl text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-10">RONAN TREMOUREUX</h1>

<h2 class = "text-center text-2xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 my-10">Software - fullStack Developper</h2>

<div class="flex w-full">
    <div></div>
    <div class="grid  flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 w-1/2">
        <MapIcon size="24" />
        <a class = "text-4xl">Current Status</a>

        <div class ="m-2"></div>

        <a>Student in software engineering school at</a>
        <a>ESIR located at Rennes1 University From France </a>
        <a>4th year of shool</a>


    </div>
    
    <div class="divider divider-horizontal"></div>

    <div class="grid  flex-grow card bg-base-300 rounded-box place-items-center p-5 m-10 w-1/2">
        <SearchIcon size="24" />
        <a class = "text-4xl">Current Research</a>

        <div class ="m-2"></div>

        <a>Searching a internship abroad for 4 month</a>
        <a>Software or web developpement</a>
    </div>
  </div>

<div class = "content-center  items-center flex m-10">
    <div class="card w-1/2 bg-indigo-300 bg-opacity-40 shadow-xl m-auto  ">

        <div class="card-body items-center text-center">
          <h2 class="card-title text-7xl ">CV</h2>
          <p>A summurized version of this website ? here is my cv !</p>
        <div class="card-actions">
            <a class="btn btn-primary" download href = "CV.pdf" >Download</a>  
        </div>
        </div>
      </div>
</div>


<div class="divider"></div> 


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
    <div class ="footer-center ">
        <a>Made by Ronan Tremoureux, Powered by svelte</a>

    </div>
    
  </section>

