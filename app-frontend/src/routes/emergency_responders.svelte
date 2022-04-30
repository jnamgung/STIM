<script>
import {
  Card,
  List,
  ListGroup,
  ListItem,
  MaterialApp,
  Subheader,
} from 'svelte-materialify';

let symptoms = {
  'high': [
    'symptom1',
    'symptom2',
    'symptom3',
    'symptom4',
  ],
  'medium': [
  ],
  'low': [
    'symptom1',
  ],
};

let emergencyContacts = [
  {
    'first_name': 'Jane',
    'last_name': 'Doe',
    'relation': 'Mother',
    'phone': '555-555-5555',
    'email': 'janedoe@gmail.com',
    'address': '5000 Forbes Ave. Pittsburgh, PA 15213',
  },
];

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
            Email: {emergencyContact['email']}
          </ListItem>
          <ListItem>
            Address: {emergencyContact['address']}
          </ListItem>
        </ListGroup>
      {/each}
    </List>
  </Card>
</MaterialApp>
