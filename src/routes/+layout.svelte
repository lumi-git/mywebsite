<script>
	import '../app.css';
	import { GithubIcon } from 'svelte-feather-icons';
	import Myfooter from '../lib/Myfooter.svelte';
	import Nav from '../lib/Nav.svelte';

	import { onMount } from 'svelte';


	onMount(async () => {
		//get the audio and apply to all element having a "btn" class
		const audio = document.getElementById('myAudio');
		const btns = document.getElementsByClassName('btn');
		for (let i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', function () {
				audio.play();
			});
		}
	});


</script>

<audio id="myAudio">
	<source src="/buttonUp.mp3" type="audio/mpeg">
</audio>

<Nav></Nav>

<slot />

<Myfooter/>