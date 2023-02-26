<script lang = "ts">
    // component props
    // Camel case not supported for props, see drawback section.
    export let content;
</script>


<div class="w-1/5  flex justify-center p-5">
    <div class="relative flex h-full w-1 bg-teal-600   items-center justify-center">
        <div class="absolute flex flex-col justify-center h-24 w-24 rounded-full border-2 border-teal-600  leading-none text-center z-10 bg-white font-thin">
            <div>{content}</div>
            
        </div>
    </div>
</div>