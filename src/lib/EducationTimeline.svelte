<script>
	import DividerTimeline from "./DividerTimeline.svelte";
import TimelineItem from "./TimelineItem.svelte";

import { onMount } from 'svelte';
	import AOS from 'aos';
	import { ApertureIcon, CheckSquareIcon, MapIcon, MapPinIcon } from "svelte-feather-icons";


    onMount(() => {
		AOS.init()
	})
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>


<div class="min-h-screen hidden sm:flex ">
    <div class="min-h-screen flex justify-center">
        <div class="w-2/3 mx-auto">
            <div class="flex flex-row w-full" />

            <div class="flex flex-row w-full" >
                <!-- left col -->

                <TimelineItem  card_title="Second year of ESIR Developper engineering shool" card_desc = "At Rennes University"  
                card_content = " During my year of engineering school, I learned how to developp a software from scratch, using the right tools.
                I also learned the goods and bads ways of doing things by leaning for example devOps methodes.
                I also learned how to work in a team and how to manage a project, that are notions as important as knowing how to develop.
                "

                />
                
                <!--line column-->
                <DividerTimeline content = "2023"/>
                <!--right column-->
                <div class="w-2/5 px-2 py-10">
                </div>
            </div>


            <div class="flex flex-row w-full" >
                <!-- left col -->
                <TimelineItem card_title="DUT in Electrical engineering" card_desc = "At Rennes University"
                card_content = "Learning signal oriented maths and physics,
                 Industrial Automatisme and embedded programming, in C and Python.
                 This is during this formation, that I learned a lot of things myself about programming.
                "
                />
                <!--line column-->
                <DividerTimeline content = "2021"/>
                <!--right column-->
                <TimelineItem card_title="Internship at Schenider Electric SETBT " card_desc = "At Chartres De Bretagnes"
                card_content = "Developping a Simulation software for connected power circuit breaker.
                it was able to simulate the current, the voltage and all the differents powers it measured. It was connected with a PLC and a HMI.
                "
                />
            </div>



            <div class="flex flex-row w-full" >
                <!-- left col -->
                <TimelineItem card_title="Bacalaureate STI2D SI EE" card_desc = "At Brequiny High School"
                card_content = "This formation helped me to learn the basics of programming
                as whell as other notion about heat, lighting, and a lot of other subjects.
                "
                />
                
                <!--line column-->
                <DividerTimeline content = "2019"/>
                <!--right column-->
                <TimelineItem card_title="Summer Job 2019 - 2023 " card_desc = "At GEFA Laboratory"
                card_content = "During this summer job, i leared how to work with a team and with other peoples.
                I also learned how to manage my time during tasks.
                "
                />
                
                
            </div>



        </div>
    </div>

</div>

<div class = "grid sm:hidden">
    <div class  = "block my-10" >

        <div class = "card bg-slate-700 rounded m-auto ml-4 mr-4 p-5">
            <div class = "text-3xl font-extrabold"> Next Degree  </div>
            <div class = "text-3xl text-center mb-2 rounded bg-slate-800  shadow-lg ">2023</div>
            <clr class = "p-2 text-center text-3xl duration-700 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-cyan-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-200 hover:to-cyan-500  transition-color ">Second year of ESIR Developper engineering shool</clr>

            <div class = "grid m-10 text-center ">  <MapPinIcon class = "m-auto"/>  <p class = "mx-10 text-xl"> At Rennes University </p></div>  
            <div class = "card-body ">During my year of engineering school, I learned how to developp a software from scratch, using the right tools.
            I also learned the goods and bads ways of doing things by leaning for example devOps methodes.
            I also learned how to work in a team and how to manage a project, that are notions as important as knowing how to develop.
        </div>
            
        </div>


    </div>

    <div class  = "block my-10" >

        <div class = "card bg-slate-700 rounded m-auto ml-4 mr-4 p-5">
            <div class = "text-3xl font-extrabold"> Degree  </div>
            <div class = "text-3xl text-center mb-2 rounded bg-slate-800  shadow-lg ">2021</div>
            <clr class = "p-2 text-center text-3xl duration-700 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-cyan-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-200 hover:to-cyan-500  transition-color ">DUT in Electrical engineering</clr>

            <div class = "grid m-10 text-center ">  <MapPinIcon class = "m-auto"/>  <p class = "mx-10 text-xl"> At Rennes University </p></div>  
            <div class = "card-body ">Learning signal oriented maths and physics,
                Industrial Automatisme and embedded programming, in C and Python.
                This is during this formation, that I learned a lot of things myself about programming.
        </div>
            
        </div>


    </div>

    <div class  = "block my-10" >

        <div class = "card bg-slate-700 rounded m-auto ml-4 mr-4 p-5">
            <div class = "text-3xl font-extrabold"> Internship  </div>
            <div class = "text-3xl text-center mb-2 rounded bg-slate-800  shadow-lg ">2021</div>

            <clr class = "p-2 text-center text-3xl duration-700 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-cyan-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-200 hover:to-cyan-500  transition-color ">Internship at Schenider Electric SETBT</clr>

            <div class = "grid m-10 text-center ">  <MapPinIcon class = "m-auto"/>  <p class = "mx-10 text-xl"> At Chartres De Bretagnes </p></div>  
            <div class = "card-body ">Developping a Simulation software for connected power circuit breaker.
                it was able to simulate the current, the voltage and all the differents powers it measured. It was connected with a PLC and a HMI.
        </div>
            
        </div>


    </div>


    <div class  = "block my-10" >

        <div class = "card bg-slate-700 rounded m-auto ml-4 mr-4 p-5">
            <div class = "text-3xl font-extrabold"> Degree  </div>
            <div class = "text-3xl text-center mb-2 rounded bg-slate-800  shadow-lg ">2019</div>
            
            <clr class = "p-2 text-center text-3xl duration-700 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-cyan-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-200 hover:to-cyan-500  transition-color ">Bacalaureate STI2D SI EE</clr>

            <div class = "grid m-10 text-center ">  <MapPinIcon class = "m-auto"/>  <p class = "mx-10 text-xl"> At Brequiny High School</p></div>  
            <div class = "card-body ">This formation helped me to learn the basics of programming
                as whell as other notion about heat, lighting, and a lot of other subjects.
        </div>
            
        </div>


    </div>


    <div class  = "block my-10" >

        <div class = "card bg-slate-700 rounded m-auto ml-4 mr-4 p-5">
            <div class = "text-3xl font-extrabold"> Job  </div>
            <div class = "text-3xl text-center mb-2 rounded bg-slate-800  shadow-lg ">2019 - 2023 </div>

            <clr class = "p-2 text-center text-3xl duration-700 text-transparent bg-clip-text bg-gradient-to-r from-cyan-500  to-cyan-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-emerald-200 hover:to-cyan-500  transition-color ">Summer Job</clr>

            <div class = "grid m-10 text-center ">  <MapPinIcon class = "m-auto"/>  <p class = "mx-10 text-xl"> At GEFA Laboratory Chateaugiron </p></div>  
            <div class = "card-body ">During this summer job, i leared how to work with a team and with other peoples.
                I also learned how to manage my time during tasks.
        </div>
            
        </div>


    </div>

</div>

<div class="w-2/5 px-2 py-32">
</div>