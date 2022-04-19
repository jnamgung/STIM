<script>
	import { Card, CardText, CardActions, Button, MaterialApp, Checkbox, Row, Col } from 'svelte-materialify';
	var severity_level = "High";
	var symptoms = [
		{
			'checked': false,
			'symptom': "Symptom 1"
		},
		{
			'checked': true,
			'symptom': "Symptom 2"
		},
		{
			'checked': false,
			'symptom': "Symptom 3"
		},
		{
			'checked': true,
			'symptom': "Symptom 4"
		},
	];
</script>
  
<MaterialApp>
	<Card outlined style="max-width:2000px;">
		<div class="pl-4 pr-4 pt-3">
		  <span class="text-h5 mb-2">Symptoms I experience at severity level {severity_level}</span>
		  <br />
		</div>
		<CardText>
		  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui quaerat
		  rerum incidunt nisi ducimus?
		</CardText>
        <div class="pl-4 pr-4 pt-3">
            {#each symptoms as symptom}
                <Row class="align-self-center">
                    <Col class="align-self-center">
                        <Checkbox checked={symptom.checked}>{symptom.symptom}</Checkbox>
                    </Col>
                </Row>
            {/each}
        </div>
	  </Card>
	
</MaterialApp>