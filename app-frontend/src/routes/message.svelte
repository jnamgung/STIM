<script>
  import {
    Card,
    CardText,
    List,
    ListItem,
    MaterialApp,
  } from 'svelte-materialify';
  import { onMount } from 'svelte';
  import { checkLogin } from '$lib/auth.js';
  import { goto } from '$app/navigation';
  import { severity_level } from './_stores.js';
  import { get } from 'svelte/store';


  let firestore = null;
  let user = null;

  let actions = [];
  let color = 'white';

  onMount(() => {
    checkLogin(
      async (u) => {
        firestore = await import('$lib/firestore');
        user = u;
        actions = await firestore.getActions(user.uid, get(severity_level));
        if (get(severity_level) === 'High') {
          color = 'red';
        }
        else if (get(severity_level) === 'Medium') {
          color = 'amber';
        }
        else if (get(severity_level) === 'Low') {
          color = 'green';
        }
      },
      () => {
        goto('/login');
      }
    );
  });
</script>

<MaterialApp>
  <Card class={color}>
    <CardText>
      <div class="white-text text-h4">
        Severity level of overstimulation - {get(severity_level)}
      </div>
    <br>
      <div class="text--primary text-h6">
        Action(s) to take:
        <List>
        {#each actions as action}
          <ListItem>{action}</ListItem>
        {/each}
        </List>
      </div>
    </CardText>
  </Card>
</MaterialApp>
