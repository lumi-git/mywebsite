<script lang = "ts">
    // component props
    // Camel case not supported for props, see drawback section.
    export let content;
</script>

<div class="w-1/5  flex justify-center ">
    <div class="relative flex h-full w-1 bg-indigo-300 items-center justify-center">
        <div class="absolute flex flex-col justify-center h-24 w-24 rounded-xl border-2 border-indigo-400 leading-none text-center z-10 bg-slate-700 font-thin">
            <div class = "text-zinc-200 font-bold text-2xl ">
                {content}</div>
            
        </div>
    </div>
</div>