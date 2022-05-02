<script>
  import {
    Card,
    CardText,
    CardActions,
    Button,
    MaterialApp,
    Checkbox,
    Row,
    Col,
    TextField
  } from 'svelte-materialify';

  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { checkLogin } from '$lib/auth.js';
  import { severity_level } from './_stores.js';
  import { get } from 'svelte/store';

  let firestore = null;
  let user = null;

  let symptoms = {
    'Fidgeting and restlessness': false,
    'Irritability and anger': false,
    'Digestive distress (cramps, nausea, vomiting)': false,
    'Extreme perspiration': false,
    'Great difficulty in communication': false,
    'Heightened sensitivity to bright lights': false,
    'Heightened sensitivity to loud noises': false,
  };
	var customSymptom = "";

  onMount(async () => {
    checkLogin(
      async (u) => {
        firestore = await import('$lib/firestore');
        user = u;
        // Load symptoms
        const remoteSymptoms = await firestore.getSymptoms(
          user.uid,
          get(severity_level),
        );
        remoteSymptoms.forEach((symptom) => {
          symptoms[symptom] = true;
        });
      },
      () => {
        goto('/login');
      }
    );
  });

  function onSubmit(_) {
    if (user == null) return;
    const keepSymptoms = Object.entries(symptoms).filter(([_, val]) => val);
    firestore.setSymptoms(
      user.uid,
      get(severity_level),
      keepSymptoms.map(([symptom, _]) => symptom),
    ).then(() => {
      alert('Symptoms updated!');
    });
  }
</script>

<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Symptoms I experience at severity level {get(severity_level)}</span>
		  <br />
		</div>
		<CardText>
			Select the symptoms you presonally face. You can also enter a custom symptom at the end.
		</CardText>
		<form on:submit|preventDefault={onSubmit}>
			<div class="pl-4 pr-4 pb-3 pt-3">
				{#each Object.keys(symptoms) as symptom}
					<Row class="align-self-center">
						<Col class="align-self-center">
							<Checkbox color="#bec6ff" bind:checked={symptoms[symptom]} value={symptom}>{symptom}</Checkbox>
						</Col>
					</Row>
				{/each}
				<Row class="align-self-center">
					<Col class="align-self-center">
						<TextField type="text" bind:value={customSymptom} placeholder="Add your own..."/>
					</Col>
				</Row>
				<Button type="submit" on:click={() => goto("/actions")} block style="background-color:#bec6ff;">Submit</Button>
			</div>
		</form>
	  </Card>

</MaterialApp>
