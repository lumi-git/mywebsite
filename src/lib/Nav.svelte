<script>

  import {BookIcon,BriefcaseIcon,CrosshairIcon,GithubIcon,HomeIcon,InfoIcon,LinkedinIcon, MenuIcon, ToolIcon, XIcon } from 'svelte-feather-icons'

	import NavUrl from './NavUrl.svelte';

</script>


<div class = " flex w-full bg-base-300 h-16 drop-shadow-xl shadow navbarmenu" id = "fadeshow2">

    
  <div class="dropdown flex dropdown-bottom " >
    
    <label tabindex="-1" class="btn m-2 float-right my-auto MenuBtn "> <MenuIcon size = 19/></label>

    <ul tabindex="-1" class=" dropdown-content menu p-2 shadow rounded-br-xl  bg-cyan-900 w-fit bg-opacity-90 backdrop-blur-sm">
      <li class = "block ">

          <a class=" tooltip tooltip-right w-full " data-tip="Back to Home" href="/#section_2" rel="noreferrer noopener"  >
            <HomeIcon class = "mx-auto"/> 
            <p>Home</p>
          </a>
    
      </li>
      
      <li class = "block">

        <a class=" tooltip tooltip-right w-full" data-tip="Education" href="/education" rel="noreferrer noopener">
          <BookIcon class = "mx-auto"/>
          <p>Education & Jobs</p>
        </a>

    </li>

    <li class = "block">

      <a class=" tooltip tooltip-right w-full" data-tip="Projects" href="/projects" rel="noreferrer noopener">
        <BriefcaseIcon class = "mx-auto"/>
        <p>Projects</p>
      </a>

  </li>

  <li class = "block">

    <a class=" tooltip tooltip-right w-full" data-tip="Skills" href="/skills" rel="noreferrer noopener">
      <ToolIcon class = "mx-auto" />
      <p>Skills</p>
    </a>

  </li>


  <li class = "block">

    <a class="tooltip tooltip-right w-full" data-tip="About" href="/about" rel="noreferrer noopener">
      <p><InfoIcon class = "mx-auto"/></p>
      <p>About</p>
    </a>

  </li>

  

  <li class = "block">

    <a href = "https://www.linkedin.com/in/ronan-tremoureux-139967233/" target = "_blank" rel="noreferrer noopener" class = "flex my-auto"> <LinkedinIcon /> LinkedIn </a>

  </li>

  <li class = "block">

    <a href = "https://github.com/lumi-git" target = "_blank" class = "flex my-auto"><GithubIcon /> My Github </a>
        

    

  </li>


    </ul>
  </div>
  <div class ="my-auto">
    <NavUrl BaseUrl = "/" />
  </div>
</div>


<!-- Nav component -->
<div class="flex bg-base-300 drop-shadow-xl shadow " id=fadeshow1>

<!-- button to Home -->
<div class="mt-2 mb-2 ml-10 flex mr-auto tooltip tooltip-right " data-tip="Back to Home">
  <a class="btn ease-in duration-300  bg-transparent " href="/#section_2" rel="noreferrer noopener"  >
    <HomeIcon />
  </a>
</div>

<div class ="my-auto">
  <NavUrl BaseUrl = "/"/>
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
    
    <a href = "https://github.com/lumi-git" target = "_blank" class = "flex my-auto"><GithubIcon /></a>
      
      <a class = "divider" id=fadeshow1 href = "https://github.com/lumi-git" target = "_blank" rel="noreferrer noopener">My Github </a>

  </div>

  <div class = "ml-2" id=fadeshow1></div>

  <div class="mt-2 mb-2 ml-2 flex tooltip tooltip-left" data-tip="Add me on LinkedIn to discuss.">
    
    <a href = "https://www.linkedin.com/in/ronan-tremoureux-139967233/" target = "_blank" rel="noreferrer noopener" class = "flex my-auto"> <LinkedinIcon /> </a>
      
      <a class = "divider" id=fadeshow1 href = "https://www.linkedin.com/in/ronan-tremoureux-139967233/" target = "_blank" rel="noreferrer noopener">LinkedIn</a>


  </div>



</div>

