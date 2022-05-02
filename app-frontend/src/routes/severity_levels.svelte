<script>
	import { Card, CardActions, Button, MaterialApp } from 'svelte-materialify';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { checkLogin } from '$lib/auth.js';
  import { severity_level } from './_stores.js';

  onMount(() => {
    checkLogin(
      (_) => {},
      () => { goto('/login'); }
    );
  });
</script>

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Please choose a severity level:</span>
		  <br />
		  <br />
		</div>
		<CardActions>
				<Button on:click={() => {severity_level.set("High"); goto("/symptoms")}} block class="red white-text">High</Button>
		</CardActions>
		<CardActions>
			<Button on:click={() => {severity_level.set("Medium"); goto("/symptoms")}} block class="amber white-text">Medium</Button>
		</CardActions>
		<CardActions>
			<Button on:click={() => {severity_level.set("Low"); goto("/symptoms")}} block class="green white-text">Low</Button>
		</CardActions>
	  </Card>

</MaterialApp>
