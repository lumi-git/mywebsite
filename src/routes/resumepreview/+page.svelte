<script lang = "ts">

    import { onMount } from 'svelte';
    function setUrl(){
        let bar = document.getElementById("NavUrl");
        bar.textContent = "My Resume";
    }
    onMount(() => {
        setUrl()
	})

</script>

<embed src="CV.pdf" type="application/pdf" width="100%" height="1000px" />