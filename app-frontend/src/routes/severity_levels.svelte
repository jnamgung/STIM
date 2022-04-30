<script>
	import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { checkLogin } from '$lib/auth.js';

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
				<Button block class="red white-text">High</Button>
		</CardActions>
		<CardActions>
			<Button block class="brown white-text">Medium</Button>
		</CardActions>
		<CardActions>
			<Button block class="green white-text">Low</Button>
		</CardActions>
	  </Card>

</MaterialApp>
