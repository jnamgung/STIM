<script>
	import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col, TextField } from 'svelte-materialify';
  import { onMount } from 'svelte';

  let firestore = null;

	var symptoms = [
		{
			'checked': false,
			'symptom': "Symptom 1"
		},
		{
			'checked': true,
			'symptom': "Symptom 2"
		},
		{
			'checked': false,
			'symptom': "Symptom 3"
		},
		{
			'checked': true,
			'symptom': "Symptom 4"
		},
	];
  onMount(async () => {
    firestore = await import('$lib/firestore');
  });

  function onSubmit(e) {
	  console.log(e);
  }
</script>

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Do I exhibit...</span>
		  <br />
		</div>
		<CardText>
		  Choose each symptom that I exhibit right now:
		</CardText>
		<form on:submit|preventDefault={onSubmit}>
			<div class="pl-4 pr-4 pb-3 pt-3">
				{#each symptoms as symptom}
					<Row class="align-self-center">
						<Col class="align-self-center">
							<Checkbox checked={symptom.checked} value={symptom.symptom}>{symptom.symptom}</Checkbox>
						</Col>
					</Row>
				{/each}
				<Button type="submit" block class="primary-color">Next</Button>
			</div>
		</form>
	  </Card>

</MaterialApp>
