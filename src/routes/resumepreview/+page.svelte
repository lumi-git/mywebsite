<script lang = "ts">

    import { onMount } from 'svelte';
	function setUrl(){
		let bar = document.getElementsByClassName("NavUrl");
		for (let i = 0; i < bar.length; i++) {
			bar[i].textContent = "Resume";
		}
	
	}
    onMount(() => {
        setUrl()
	})

</script>

<embed src="CV.pdf" type="application/pdf" width="100%" height="1000px" />