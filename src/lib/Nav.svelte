<script>

import { AirplayIcon, AtSignIcon,BookIcon,BriefcaseIcon,GithubIcon,HomeIcon,InfoIcon,LinkedinIcon,MapIcon,PowerIcon,SearchIcon, ToolIcon } from 'svelte-feather-icons'

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

  <div class = "ml-32" id=fadeshow1></div>

  <div class="mt-2 mb-2 flex" >
    
    <a href = "https://github.com/lumi-git" target = "_blank"><GithubIcon /></a>
      
      <a class = "divider" id=fadeshow1 href = "https://github.com/lumi-git" target = "_blank">My Github </a>


  </div>

  <div class = "ml-2" id=fadeshow1></div>

  <div class="mt-2 mb-2 flex" >
    
    <a href = "https://www.linkedin.com/in/ronan-tremoureux-139967233/" target = "_blank"><LinkedinIcon /></a>
      
      <a class = "divider" id=fadeshow1 href = "https://www.linkedin.com/in/ronan-tremoureux-139967233/" target = "_blank">LinkedIn</a>


  </div>



</div>

