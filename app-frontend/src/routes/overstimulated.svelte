<script>
	import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';
</script>
  

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Help! I am overstimulated and need assistance.</span>
		  <br />
		</div>
		<CardActions>
			<a sveltekit:prefetch href="/message">
			<Button block>I am someone nearby.</Button>
			</a>
        </CardActions>
        <CardActions>
            <Button block>I am a first responder.</Button>
        </CardActions>
	  </Card>
	
</MaterialApp>