<script>
import {
  Card,
  List,
  ListGroup,
  ListItem,
  MaterialApp,
  Subheader,
} from 'svelte-materialify';

import { onMount } from 'svelte';
import { goto } from '$app/navigation';
import { checkLogin } from '$lib/auth.js';


let firestore = null;
let user = null;
let symptoms = {
  'high': [],
  'medium': [],
  'low': [],
};
let emergencyContacts = [];

onMount(() => {
  checkLogin(
    async (u) => {
      user = u;
      firestore = await import('$lib/firestore');
      emergencyContacts = await firestore.getEmergencyContacts(user.uid);
      symptoms['high'] = await firestore.getSymptoms(user.uid, 'high');
      symptoms['medium'] = await firestore.getSymptoms(user.uid, 'medium');
      symptoms['low'] = await firestore.getSymptoms(user.uid, 'low');
    },
    () => { goto('/login'); }
  );
});


</script>

<MaterialApp>
  <Card>
    <List>
      <Subheader>
        Symptoms I May Be Experiencing
      </Subheader>
      <ListGroup offset={32}>
        <span slot="activator">High Severity</span>
        {#each symptoms['high'] as symptom}
          <ListItem>{symptom}</ListItem>
        {/each}
      </ListGroup>
      <ListGroup offset={32}>
        <span slot="activator">Medium Severity</span>
        {#each symptoms['medium'] as symptom}
          <ListItem>{symptom}</ListItem>
        {/each}
      </ListGroup>
      <ListGroup offset={32}>
        <span slot="activator">Low Severity</span>
        {#each symptoms['low'] as symptom}
          <ListItem>{symptom}</ListItem>
        {/each}
      </ListGroup>
    </List>
    <List>
      <Subheader>
        Emergency Contacts
      </Subheader>
      {#each emergencyContacts as emergencyContact}
        <ListGroup offset={32}>
          <span slot='activator'>{emergencyContact['first_name']} {emergencyContact['last_name']} - {emergencyContact['relation']}
          </span>
          <ListItem>
            Phone: {emergencyContact['phone']}
          </ListItem>
          <ListItem>
            Email: {emergencyContact['email'].length == 0 ? 'N/A' : emergencyContact['email']}
          </ListItem>
          <ListItem>
            Address: {emergencyContact['address'].length == 0 ? 'N/A': emergencyContact['address']}
          </ListItem>
        </ListGroup>
      {/each}
    </List>
  </Card>
</MaterialApp>
