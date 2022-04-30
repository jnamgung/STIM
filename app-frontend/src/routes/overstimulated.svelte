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
		  <span class="text-h5 mb-2">Help! I am overstimulated and need assistance.</span>
		  <br />
		</div>
		<CardActions>
			<Button block on:click={() => goto("/message")} class="primary-color">I am someone nearby.</Button>
        </CardActions>
        <CardActions>
            <Button block class="primary-color">I am a first responder.</Button>
        </CardActions>
	  </Card>

</MaterialApp>
