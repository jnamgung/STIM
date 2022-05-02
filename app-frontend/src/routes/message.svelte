<script>
  import {
    Card,
    CardTitle,
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

  onMount(() => {
    checkLogin(
      async (u) => {
        firestore = await import('$lib/firestore');
        user = u;
        // Load actions
        actions = await firestore.getActions(
          user.uid,
          get(severity_level),
        );
      },
      () => {
        goto('/login');
      }
    );
  });


  const severity_colors = {
   "Low": 'green',
   "Medium": 'amber',
   "High": 'red' ,
  };

</script>

<MaterialApp>
  <Card class={severity_colors[get(severity_level)]}>
    <CardText>
      <div class="white-text text-h4">Severity level of overstimulation - {get(severity_level)}</div>
    <br>
    <div class="black-text text-h6">Actions you can take to help:</div>
    <List>
        {#each actions as action}
          <ListItem>{action}</ListItem>
        {/each}
    </List>
    </CardText>
  </Card>
</MaterialApp>
