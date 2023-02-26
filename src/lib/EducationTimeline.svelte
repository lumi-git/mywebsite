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
                <div class="w-2/5 px-2 py-10">
                </div>
                <!--line column-->
                <DividerTimeline content = "2023"/>
                <!--right column-->
                <TimelineItem card_title="4th year of ESIR Developper engineering shool" card_desc = "At Rennes University"  />
            </div>



            <div class="flex flex-row w-full">
                <!-- left col -->
                <TimelineItem card_title="DUT in Electrical engineering" card_desc = "At Rennes University"/>

                <!--line column-->
                <DividerTimeline content = "2021"/>
                <!--right column-->
                <TimelineItem card_title="Internship at Schenider Electric SETBT " card_desc = "At Chartres De Bretagnes"/>
            </div>




            <div class="flex flex-row w-full">
                <!-- left col -->
                <TimelineItem card_title="Summer Job 2019 - 2023" card_desc = "At GEFA Laboratory "/>
                <!--line column-->
                <DividerTimeline content = "2019"/>
                <!--right column-->
                <TimelineItem card_title="Bacalaureate STI2D SI EE" card_desc = "At Brequiny High School"/>
            </div>



        </div>
    </div>

</div>