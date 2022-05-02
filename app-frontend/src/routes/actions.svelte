<script>
  import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col, TextField } from 'svelte-materialify';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { checkLogin } from '$lib/auth.js';


  let firestore = null;
  let user = null;

  let severity_level = "High";
  let actions = {
    'Move me to a quiet space': false,
    'Text/Call my emergency contacts': false,
    'Get me a glass of water': false,
    'Walk me through guided breathing': false,
    'Get out my fidget toy': false,
    'Dim all of the lights': false,
    'Call emergency services (911)': false,
  };
  let customAction = "";

  onMount(() => {
    checkLogin(
      async (u) => {
        firestore = await import('$lib/firestore');
        user = u;
        // Load actions
        const remoteActions = await firestore.getActions(
          user.uid,
          severity_level,
        );
        remoteActions.forEach((action) => {
          actions[action] = true;
        });
      },
      () => {
        goto('/login');
      }
    );
  });

  function onSubmit(_) {
    if (user == null) return;
    const keepActions = Object.entries(actions).filter(([_, val]) => val);
    firestore.setActions(
      user.uid,
      severity_level,
      keepActions.map(([action, _]) => action),
    ).then(() => {
      alert('Actions updated!');
      goto('/severity_levels');
    });
  }

  function addAction() {
    if (customAction != null && customAction.trim() != "") {
      actions[customAction] = true;
      customAction = "";
    }
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
        {#each Object.keys(actions) as action}
          <Row class="align-self-center">
            <Col class="align-self-center">
              <Checkbox color="#bec6ff" bind:checked={actions[action]} value={action}>{action}</Checkbox>
            </Col>
          </Row>
        {/each}
        <Row class="align-self-center">
          <Col class="align-self-center">
            <TextField type="text" bind:value={customAction} placeholder="Custom action..."/>
          </Col>
          <Col class="align-self-center">
            <Button on:click={() => addAction()}  style="background-color:#bec6ff;">&plus; Add</Button>
          </Col>
        </Row>
        <Button type="submit" block style="background-color:#bec6ff;">Submit</Button>
      </div>
    </form>
  </Card>
</MaterialApp>
