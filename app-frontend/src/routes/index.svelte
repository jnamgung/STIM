<script>
	import { page } from '$app/stores';
	import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';
</script>
  

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">This is the home page:</span>
		  <br />
		</div>
		<CardActions>
			<a sveltekit:prefetch href="/overstimulated">
			<Button block class="red white-text">
					Press this button if you're feeling overstimulated!
			</Button>
			</a>
		</CardActions>
		<CardActions>
			
		</CardActions>
	  </Card>
	
</MaterialApp>