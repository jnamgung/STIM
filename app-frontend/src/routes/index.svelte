<script>
	import { page } from '$app/stores';
	import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';
	import { goto } from '$app/navigation';
</script>
  

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">This is the home page:</span>
		  <br />
		</div>
		<CardActions>
			<Button block class="red white-text" on:click={() => goto("/overstimulated")}>
					Press this button if you're feeling overstimulated!
			</Button>
		</CardActions>
	  </Card>
	
</MaterialApp>