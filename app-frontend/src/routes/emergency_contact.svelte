<script>
    import { Card, CardText, CardActions, TextField, Button, MaterialApp } from 'svelte-materialify';

    const phoneRules = [
    (v) => !!v || 'Required',
    (v) => {
      const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
      return pattern.test(v) || 'Invalid phone number.';
    },
  ];

    const emailRules = [
        (v) => !!v || 'Required',
        (v) => v.length <= 25 || 'Max 25 characters',
        (v) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(v) || 'Invalid e-mail.';
        },
    ];

</script>
  
  <MaterialApp>
    <Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Add Emergency Contact</span>
		  <br />
		</div>
		<CardText>
		  Input the details of the emergency contact you would like to add. 
          If you elect to have bystanders contact your emergency contacts during a sensory overload, 
          this individual will be contacted via text.
		</CardText>
        <CardActions>
            <TextField placeholder="Jane" outlined>First Name</TextField>
        </CardActions>
        <CardActions>
            <TextField placeholder="Doe" outlined>Last Name</TextField>
        </CardActions>
        <CardActions>
            <TextField placeholder="Mother" outlined>Relation</TextField>
        </CardActions>
        <CardActions>
            <TextField placeholder="555-555-5555" rules={phoneRules} outlined>Phone</TextField>
        </CardActions>
        <CardActions>
            <TextField placeholder="janedoe@gmail.com" rules={emailRules} outlined>Email</TextField>
        </CardActions>
        <CardActions>
            <TextField placeholder="5000 Forbes Ave. Pittsburgh, PA 15213" outlined>Address</TextField>
        </CardActions>
        <CardActions>
            <Button block class="indigo white-text">Submit</Button>
        </CardActions>
    </Card>
  </MaterialApp>