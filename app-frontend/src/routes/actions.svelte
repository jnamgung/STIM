<script>
  import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col, TextField } from 'svelte-materialify';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';


  let firestore = null;

  var severity_level = "High";
  var actions = [
    {
      'checked': false,
      'action': "Move me to a quiet space"
    },
    {
      'checked': false,
      'action': "Text/Call my emergency contacts"
    },
    {
      'checked': false,
      'action': "Get me a glass of water"
    },
    {
      'checked': false,
      'action': "Walk me through guided breathing"
    },
    {
      'checked': false,
      'action': "Get out my fidget toy"
    },
    {
      'checked': false,
      'action': "Dim all of the lights"
    },
    {
      'checked': false,
      'action': "Call 911"
    },
  ];
  var customAction = "";

  onMount(async () => {
    firestore = await import('$lib/firestore');
  });

  function onSubmit(e) {
	  console.log(e);
    console.log(customAction);
  }
</script>

<MaterialApp>
  <Card outlined style="max-width:2000px;">
    <div class="pl-4 pr-4 pt-3">
      <span class="text-h5 mb-2">Actions other can take to help at severity level {severity_level}</span>
      <br />
    </div>
    <CardText>
      Select the actions you would like someone to take. You can also enter a custom action at the end.
    </CardText>
    <form on:submit|preventDefault={onSubmit}>
			<div class="pl-4 pr-4 pb-3 pt-3">
				{#each actions as action}
					<Row class="align-self-center">
						<Col class="align-self-center">
							<Checkbox checked={action.checked} value={action.action}>{action.action}</Checkbox>
						</Col>
					</Row>
				{/each}
				<Row class="align-self-center">
					<Col class="align-self-center">
						<TextField type="text" bind:value={customAction} placeholder="Add your own..."/>
					</Col>
				</Row>
				<Button type="submit" block class="primary-color">Submit</Button>
			</div>
		</form>
    </Card>

</MaterialApp>
