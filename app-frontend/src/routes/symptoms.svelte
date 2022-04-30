<script>
	import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col, TextField } from 'svelte-materialify';
  import { onMount } from 'svelte';

  let firestore = null;

	var severity_level = "High";
	var symptoms = [
		{
			'checked': false,
			'symptom': "Fidgeting and restlessness"
		},
		{
			'checked': false,
			'symptom': "Irritability and anger"
		},
		{
			'checked': false,
			'symptom': "Digestive distress (cramps, nausea, vomiting)"
		},
		{
			'checked': false,
			'symptom': "Extreme Perspiration"
		},
		{
			'checked': false,
			'symptom': "Great difficulty in communication"
		},
		{
			'checked': false,
			'symptom': "Heightened sensitivity to bright lights"
		},
		{
			'checked': false,
			'symptom': "Heightened sensitivity to loud noises"
		},
	];
	var customSymptom = "";
  onMount(async () => {
    firestore = await import('$lib/firestore');
  });

  function onSubmit(e) {
	  console.log(e);
	  console.log(customSymptom);
  }
</script>

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Symptoms I experience at severity level {severity_level}</span>
		  <br />
		</div>
		<CardText>
			Select the symptoms you presonally face. You can also enter a custom symptom at the end.
		</CardText>
		<form on:submit|preventDefault={onSubmit}>
			<div class="pl-4 pr-4 pb-3 pt-3">
				{#each symptoms as symptom}
					<Row class="align-self-center">
						<Col class="align-self-center">
							<Checkbox color="#bec6ff" checked={symptom.checked} value={symptom.symptom}>{symptom.symptom}</Checkbox>
						</Col>
					</Row>
				{/each}
				<Row class="align-self-center">
					<Col class="align-self-center">
						<TextField type="text" bind:value={customSymptom} placeholder="Add your own..."/>
					</Col>
				</Row>
				<Button type="submit" block style="background-color:#bec6ff;">Submit</Button>
			</div>
		</form>
	  </Card>

</MaterialApp>
