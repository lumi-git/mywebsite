<script lang="ts">

    import Nav from '../../lib/Nav.svelte';
</script>

<Nav />
<div >



</div>
<h2 class = "text-center text-7xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 mt-5 mb-5">Projects</h2>

<div id = itemsHolder >
<div> 
    <div class = "items-center  card bg-slate-500  bg-opacity-60   rounded  w-1/2 mt-32 m-auto p-5">
        <h1 class = "m-auto text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500" >Ballons</h1>
        <a>A simple ballon simulation lead by p5 library in JS</a>
        <a href = "/projects/P5Ballon" class = "btn  ">Try it </a>

    </div>

</div>

<div> 
    <div class = " items-center card bg-purple-400 bg-opacity-60   rounded  w-1/2 mt-32 m-auto p-5">
        <h1 class = "m-auto text-7xl bg-clip-text bg-gradient-to-r from-emerald-200 to-cyan-500 ">Dot Connection</h1>

        <div>
            <a>A simple Dot connection lead by p5 library in JS</a>
        </div>


        <a href = "/projects/P5Connections" class = "btn  ">Try it </a>

    </div>

</div>
</div>