<script>
  import { login, checkLogin } from '$lib/auth.js';
  import { onMount } from 'svelte';
  import { Button, MaterialApp } from 'svelte-materialify';
	import { goto } from '$app/navigation';

  onMount(() => {
    checkLogin((_) => { goto('/'); }, () => {});
  });
</script>


<MaterialApp>
  <Button on:click={login}>Log In</Button>
</MaterialApp>
