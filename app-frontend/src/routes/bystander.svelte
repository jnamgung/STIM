<script>
  import {
    Button,
    Card,
    CardActions,
    CardText,
    Checkbox,
    Col,
    MaterialApp,
    Row,
  } from 'svelte-materialify';
  import { onMount } from 'svelte';
  import { checkLogin } from '$lib/auth.js';
  import { goto } from '$app/navigation';
  import { severity_level } from './_stores.js';
  import { get } from 'svelte/store';


  let firestore = null;
  let user = null;

  let symptoms = {};

  onMount(() => {
    checkLogin(
      async (u) => {
        firestore = await import('$lib/firestore');
        user = u;
        const highSymptoms = await firestore.getSymptoms(user.uid, 'high');
        const mediumSymptoms = await firestore.getSymptoms(user.uid, 'medium');
        const lowSymptoms = await firestore.getSymptoms(user.uid, 'low');

        highSymptoms.forEach((symptom) => {
          symptoms[symptom] = {
            'checked': false,
            'severity': 'high',
          }
        });
        mediumSymptoms.forEach((symptom) => {
          symptoms[symptom] = {
            'checked': false,
            'severity': 'medium',
          }
        });
        lowSymptoms.forEach((symptom) => {
          symptoms[symptom] = {
            'checked': false,
            'severity': 'low',
          }
        });
      },
      () => { goto('/login'); }
    );
  });

  function onSubmit(_) {
    severity_level.set('Low');
    Object.keys(symptoms).forEach((symptom) => {
      if (symptoms[symptom]['checked']) {
        if (symptoms[symptom]['severity'] === 'high') {
          severity_level.set('High');
        }
        else if (
          symptoms[symptom]['severity'] === 'medium' &&
          get(severity_level) === 'Low'
        ) {
          severity_level.set('Medium');
        }
      }
    });
    goto("/message");
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
        {#each Object.keys(symptoms) as symptom}
          <Row class="align-self-center">
            <Col class="align-self-center">
              <Checkbox
                color="#bec6ff"
                bind:checked={symptoms[symptom]['checked']}
                value={symptom}
              >{symptom}</Checkbox>
            </Col>
          </Row>
        {/each}
        <Button
          type="submit"
          block
          style="background-color:#bec6ff;"
        >Next</Button>
      </div>
    </form>
    </Card>

</MaterialApp>
