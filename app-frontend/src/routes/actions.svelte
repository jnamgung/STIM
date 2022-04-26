<script>
  import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col, TextField } from 'svelte-materialify';
  import { onMount } from 'svelte';

  let firestore = null;

  var severity_level = "High";
  var actions = [
    {
      'checked': false,
      'action': "Action 1"
    },
    {
      'checked': true,
      'action': "Action 2"
    },
    {
      'checked': false,
      'action': "Action 3"
    },
    {
      'checked': true,
      'action': "Action 4"
    },
  ];
  var customAction = "";

  onMount(async () => {
    firestore = await import('$lib/firestore');
  });

  function onSubmit(e) {
    console.log(customAction);
    console.log(actions);
  }
</script>

<MaterialApp>
  <Card outlined style="max-width:2000px;">
    <div class="pl-4 pr-4 pt-3">
      <span class="text-h5 mb-2">Actions other can take to help at severity level {severity_level}</span>
      <br />
    </div>
    <CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui quaerat
      rerum incidunt nisi ducimus?
    </CardText>
    <form on:submit|preventDefault={onSubmit}>
			<div class="pl-4 pr-4 pb-3 pt-3">
				{#each actions as action}
					<Row class="align-self-center">
						<Col class="align-self-center">
							<Checkbox bind:checked={action.checked} value={action.action}>{action.action}</Checkbox>
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
