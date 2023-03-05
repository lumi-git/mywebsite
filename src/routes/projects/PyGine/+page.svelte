<script lang="ts">

    
import { GithubIcon } from 'svelte-feather-icons'
import { onMount } from 'svelte';

function setUrl(){
    let bar = document.getElementById("NavUrl");
    bar.textContent = "Projects / PyGine";
}
onMount(() => {
    setUrl();
})
</script>




<h2 class = "text-center text-2xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">A Game library called PyGine, in Python</h2>


<div> 
    <div class = " ml-32">
        <a href = "/projects" class = "btn bg-error">Back to projects</a>
    </div>
</div>


<div class = " flex justify-center">
    <a>This page is not finished yet stay tuned !</a>
</div>

<div class=" m-5">

</div>
<div class = " flex justify-center">

    <a href = "https://github.com/PythonGameEngineDev/PyGine" target = "_blank" rel="noreferrer noopener"> 
        
        <GithubIcon/>
    </a>

    <a href = "https://github.com/PythonGameEngineDev/PyGine" target = "_blank" rel="noreferrer noopener">Find more on the PyGine github</a>

    <a href = "https://github.com/PythonGameEngineDev/PyGine" target = "_blank" rel="noreferrer noopener"> 
        
        <GithubIcon/>
    </a>
</div>


