<script>
    import { Card, CardText, CardActions, TextField, Button, MaterialApp } from 'svelte-materialify';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { checkLogin } from '$lib/auth.js';

    let firestore = null;
    let user = null;

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

    let first_name = "";
    let last_name = "";
    let relation = "";
    let phone = "";
    let email = "";
    let address = "";
    let phone_error = false;
    let email_error = false;

    function handleSubmit(e) {
      if (phone_error || email_error) return;
      if (firestore == null) return;

      firestore.addEmergencyContact(
        user.uid,
        first_name,
        last_name,
        relation,
        phone,
        email,
        address
      ).then(() => {
        alert('Emergency contact created!');
      });
    }

    onMount(() => {
      checkLogin(
        async (u) => {
          user = u;
          firestore = await import('$lib/firestore');
        },
        () => { goto('/login'); }
      );
    });

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
    <form on:submit|preventDefault={handleSubmit}>
        <CardActions>
            <TextField bind:value={first_name} placeholder="Jane" outlined required>First Name</TextField>
        </CardActions>
        <CardActions>
            <TextField bind:value={last_name} placeholder="Doe" outlined required>Last Name</TextField>
        </CardActions>
        <CardActions>
            <TextField bind:value={relation} placeholder="Mother" outlined required>Relation</TextField>
        </CardActions>
        <CardActions>
            <TextField bind:value={phone} bind:error={phone_error} placeholder="555-555-5555" rules={phoneRules} outlined required>Phone</TextField>
        </CardActions>
        <CardActions>
            <TextField bind:value={email} bind:error={email_error} placeholder="janedoe@gmail.com" rules={emailRules} outlined>Email</TextField>
        </CardActions>
        <CardActions>
            <TextField bind:value={address} placeholder="5000 Forbes Ave. Pittsburgh, PA 15213" outlined>Address</TextField>
        </CardActions>
        <CardActions>
            <Button block class="indigo white-text" type="submit">Submit</Button>
        </CardActions>
      </form>
    </Card>
  </MaterialApp>
