<script>
	import DividerTimeline from "./DividerTimeline.svelte";
import TimelineItem from "./TimelineItem.svelte";

</script>
<!-- component -->
<!-- This is an example component -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
<div class="min-h-screen ">
    <div class="min-h-screen flex justify-center">
        <div class="w-2/3 mx-auto">
            <div class="flex flex-row w-full" />

            <div class="flex flex-row w-full">
                <!-- left col -->

                <TimelineItem card_title="4th year of ESIR Developper engineering shool" card_desc = "At Rennes University"  
                card_content = ""
                />
                
                <!--line column-->
                <DividerTimeline content = "2023"/>
                <!--right column-->
                <div class="w-2/5 px-2 py-10">
                </div>
            </div>


            <div class="flex flex-row w-full">
                <!-- left col -->
                <TimelineItem card_title="DUT in Electrical engineering" card_desc = "At Rennes University"
                card_content = "Learning signal oriented maths and physics. Industrial Automatisme and embedded programming, in C and Python

                "
                />
                <!--line column-->
                <DividerTimeline content = "2021"/>
                <!--right column-->
                <TimelineItem card_title="Internship at Schenider Electric SETBT " card_desc = "At Chartres De Bretagnes"
                card_content = "Developping a Simulation software for connected power circuit breaker.
                it was able to simulate the current, the voltage and all the differents powers it measured 
                "
                />
            </div>


            <div class="flex flex-row w-full">
                <!-- left col -->
                <TimelineItem card_title="Bacalaureate STI2D SI EE" card_desc = "At Brequiny High School"
                card_content = ""
                />

                
                <!--line column-->
                <DividerTimeline content = "2019"/>
                <!--right column-->
                <div class="w-2/5 px-2 py-10"></div>
                
            </div>



        </div>
    </div>

</div>