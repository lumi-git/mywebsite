<script>

  import {BookIcon,BriefcaseIcon,GithubIcon,HomeIcon,InfoIcon,LinkedinIcon, ToolIcon } from 'svelte-feather-icons'
</script>


<!-- button to home page -->
<div class="navbar bg-base-300">

  <a href="/" rel="noreferrer noopener" class = "tooltip tooltip-right Logo  ml-10 flex flex-wrap mr-auto"  data-tip="Back to Home" >
  
  <img src = "R.png " class = "" alt = "R">

  <img/>

</a>


<!-- button to Home -->
<div class="mt-2 mb-2 flex mr-12 tooltip tooltip-bottom " data-tip="Back to Home">
  <a class="btn ease-in duration-300  bg-transparent " href="/" rel="noreferrer noopener"  >
    <HomeIcon />
  </a>
  
</div>


<!-- button to Education -->
  <div class="mt-2 mb-2 flex ml-2 tooltip tooltip-bottom" data-tip="Discover my education timeline ! ">
    <a class="btn ease-in duration-300  bg-transparent" href="/education" rel="noreferrer noopener">
      <BookIcon />
      <div class = "divider" id=fadeshow1>Education & Job</div>
    </a>
  </div>



<!-- divistion for margin if the screen is wider -->
  <div class = "m-2" id=fadeshow1></div>


<!-- button to Project -->
  <div class="mt-2 mb-2 flex ml-2 tooltip tooltip-bottom" data-tip="Some projects in various languages ">
    <a class="btn ease-in duration-300  bg-transparent  " href="/projects" rel="noreferrer noopener">
      <BriefcaseIcon />
      <div class = "divider" id=fadeshow1>Projects</div>
    </a>
  </div>

  <div class = "m-2" id=fadeshow1></div>


<!-- button to Skills -->
  <div class="mt-2 mb-2 flex ml-2 tooltip tooltip-bottom" data-tip="From Soft to Technicals ">
    <a class="btn  ease-in duration-300  bg-transparent" href="/skills" rel="noreferrer noopener">
      <ToolIcon />
      <div class = "divider" id=fadeshow1>Skills</div>

    </a>
  </div>

  <div class = "m-2" id=fadeshow1></div>


<!-- button to About -->
  <div class="mt-2 mb-2 flex ml-2 tooltip tooltip-bottom" data-tip="Contests and hobbies, here they are ! ">
    <a class="btn ease-in duration-300  bg-transparent" href="/about" rel="noreferrer noopener">
      <InfoIcon />
      <div class = "divider" id=fadeshow1>About</div>
    </a>
  </div>

  <div class = "ml-4" id=fadeshow1></div>

  <div class="mt-2 mb-2 flex ml-2 tooltip tooltip-bottom" data-tip="Link to my public github" >
    
    <a href = "https://github.com/lumi-git" target = "_blank"><GithubIcon /></a>
      
      <a class = "divider" id=fadeshow1 href = "https://github.com/lumi-git" target = "_blank" rel="noreferrer noopener">My Github </a>

  </div>

  <div class = "ml-2" id=fadeshow1></div>

  <div class="mt-2 mb-2 ml-2 flex tooltip tooltip-left" data-tip="Add me on LinkedIn to discuss.">
    
    <a href = "https://www.linkedin.com/in/ronan-tremoureux-139967233/" target = "_blank" rel="noreferrer noopener"><LinkedinIcon /></a>
      
      <a class = "divider" id=fadeshow1 href = "https://www.linkedin.com/in/ronan-tremoureux-139967233/" target = "_blank" rel="noreferrer noopener">LinkedIn</a>


  </div>



</div>

