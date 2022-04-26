<script>
	import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col, TextField } from 'svelte-materialify';
  import { onMount } from 'svelte';

  let firestore = null;

	var severity_level = "High";
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
	var customSymptom = "";
  onMount(async () => {
    firestore = await import('$lib/firestore');
  });

  function onSubmit(e) {
	  console.log(customSymptom);
	  console.log(symptoms);
  }
</script>

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Symptoms I experience at severity level {severity_level}</span>
		  <br />
		</div>
		<CardText>
		  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui quaerat
		  rerum incidunt nisi ducimus?
		</CardText>
		<form on:submit|preventDefault={onSubmit}>
			<div class="pl-4 pr-4 pb-3 pt-3">
				{#each symptoms as symptom}
					<Row class="align-self-center">
						<Col class="align-self-center">
							<Checkbox bind:checked={symptom.checked} value={symptom.symptom}>{symptom.symptom}</Checkbox>
						</Col>
					</Row>
				{/each}
				<Row class="align-self-center">
					<Col class="align-self-center">
						<TextField type="text" bind:value={customSymptom} placeholder="Add your own..."/>
					</Col>
				</Row>
				<Button type="submit" block class="primary-color">Submit</Button>
			</div>
		</form>
	  </Card>

</MaterialApp>
