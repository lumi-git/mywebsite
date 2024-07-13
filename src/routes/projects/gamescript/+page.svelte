<script lang="ts">
    import MyGameScript from '$lib/MyGameScript.svelte';
import { onMount } from 'svelte';
	function setUrl(){
		let bar = document.getElementsByClassName("NavUrl");
		for (let i = 0; i < bar.length; i++) {
			bar[i].textContent = "Projects / Ballon";
		}
	
	}
    onMount(() => {
        setUrl();

    })
</script>

<MyGameScript/>