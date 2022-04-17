<script>
	import { Card, CardText, CardActions, Button, MaterialApp } from 'svelte-materialify';
</script>
  
<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Please choose a severity level:</span>
		  <br />
		</div>
		<CardText>
		  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui quaerat
		  rerum incidunt nisi ducimus?
		</CardText>
		<CardActions>
				<Button block class="red white-text">High</Button>
		</CardActions>
		<CardActions>
			<Button block class="yellow white-text">Medium</Button>
		</CardActions>
		<CardActions>
			<Button block class="green white-text">Low</Button>
		</CardActions>
	  </Card>
	
</MaterialApp>