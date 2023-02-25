<script>

import { AirplayIcon, AtSignIcon,BriefcaseIcon,HomeIcon,InfoIcon,MapIcon,PowerIcon,SearchIcon, ToolIcon } from 'svelte-feather-icons'

</script>
<div class="navbar bg-base-300">

  <div class="mx-1 ml-8 mr-28 flex">
    <a class="btn ease-in duration-300 bg-transparent" href="/">
      <HomeIcon />
      <div class = "divider">Home</div>
 
      </a>
      

    
  </div>

  <div class="mx-10 flex">
    <a class="btn ease-in duration-300  bg-transparent  " href="/projects">
      <BriefcaseIcon />
      <div class = "divider">Projets</div>
    </a>
  </div>

  <div class="mx-10 flex">
    <a class="btn  ease-in duration-300  bg-transparent" href="/skils">
      <ToolIcon />
      <div class = "divider">Skils</div>

    </a>
  </div>

  <div class="mx-10 flex">
    <a class="btn ease-in duration-300  bg-transparent" href="/about">
      <InfoIcon />
      <div class = "divider">About</div>
    </a>
  </div>

</div>

