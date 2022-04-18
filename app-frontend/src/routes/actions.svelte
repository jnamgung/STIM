<script>
	import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col } from 'svelte-materialify';
	var severity_level = "High";
	var actions = [
		{
			'checked': false,
			'action': "Action 1"
		},
		{
			'checked': true,
			'action': "Action 2"
		},
		{
			'checked': false,
			'action': "Action 3"
		},
		{
			'checked': true,
			'action': "Action 4"
		},
	];
</script>
  
<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Actions other can take to help at severity level {severity_level}</span>
		  <br />
		</div>
		<CardText>
		  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui quaerat
		  rerum incidunt nisi ducimus?
		</CardText>
		<div class="pl-4 pr-4 pt-3">
			{#each actions as action}
				<Row class="align-self-center">
					<Col class="align-self-center">
						<Checkbox checked={action.checked}>{action.action}</Checkbox>
					</Col>
				</Row>
			{/each}
		</div>
	  </Card>
	
</MaterialApp>