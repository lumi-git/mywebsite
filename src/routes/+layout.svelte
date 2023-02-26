<script>
	import '../app.css';
	import { GithubIcon } from 'svelte-feather-icons';
	import Myfooter from '../lib/Myfooter.svelte';
	import Nav from '../lib/Nav.svelte';
</script>

<Nav></Nav>

<slot />

<Myfooter/>