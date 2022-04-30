<script>
	import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col, TextField } from 'svelte-materialify';
  import { onMount } from 'svelte';
  import { checkLogin } from '$lib/auth.js';
  import { goto } from '$app/navigation';

  let firestore = null;

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
  onMount(async () => {
    checkLogin(
      (_) => {},
      () => { goto('/login'); }
    );
    firestore = await import('$lib/firestore');
  });

  function onSubmit(e) {
	  console.log(symptoms);
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
							<Checkbox color="#bec6ff" bind:checked={symptom.checked} value={symptom.symptom}>{symptom.symptom}</Checkbox>
						</Col>
					</Row>
				{/each}
				<Button type="submit" block style="background-color:#bec6ff;">Next</Button>
			</div>
		</form>
	  </Card>

</MaterialApp>
