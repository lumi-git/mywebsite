<script>

import { AirplayIcon, AtSignIcon,BookIcon,BriefcaseIcon,HomeIcon,InfoIcon,MapIcon,PowerIcon,SearchIcon, ToolIcon } from 'svelte-feather-icons'

</script>
<div class="navbar bg-base-300">

  <div class="">

  </div>
  
  <div class="ml-8 mt-2 mb-2 mr-28 flex">
    <a class="btn ease-in duration-300 bg-transparent" href="/">
      <HomeIcon />
      <div class = "divider " id=fadeshow1>Home</div>
 
      </a>
  </div>
  
  <div class="mt-2 mb-2 flex">
    <a class="btn ease-in duration-300  bg-transparent" href="/education">
      <BookIcon />
      <div class = "divider" id=fadeshow1>Education && Job</div>
    </a>
  </div>

  <div class = "m-2" id=fadeshow1></div>

  <div class="mt-2 mb-2 flex">
    <a class="btn ease-in duration-300  bg-transparent  " href="/projects">
      <BriefcaseIcon />
      <div class = "divider" id=fadeshow1>Projects</div>
    </a>
  </div>

  <div class = "m-2" id=fadeshow1></div>

  <div class="mt-2 mb-2 flex">
    <a class="btn  ease-in duration-300  bg-transparent" href="/skills">
      <ToolIcon />
      <div class = "divider" id=fadeshow1>Skills</div>

    </a>
  </div>

  <div class = "m-2" id=fadeshow1></div>

  <div class="mt-2 mb-2 flex" >
    <a class="btn ease-in duration-300  bg-transparent" href="/about">
      <InfoIcon />
      <div class = "divider" id=fadeshow1>About</div>
    </a>
  </div>

</div>

