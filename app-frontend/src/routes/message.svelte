<script>
    import {
      Card,
      CardTitle,
      CardText,
      Button,
      Row,
      Col,
      MaterialApp } from 'svelte-materialify';

    let current_level = "High";
  
    const severity_levels = {
     "Low": { name: 'Low', message: 'Take me to a quiet place.', color: 'green' },
     "Medium": { name: 'Medium', message: 'Take me to a quiet place and call a friend.', color: 'amber' },
     "High": { name: 'High', message: 'Take me to a quiet place and call emergency contact.', color: 'red' },
    };

  </script>
  
  <MaterialApp>
        <Card class={severity_levels[current_level].color}>
            <CardText>
              <div class="white-text text-h4">Severity level of overstimulation - {severity_levels[current_level].name}</div>
            <br>
              <div class="text--primary text-h6">Action(s) to take: {severity_levels[current_level].message}</div>
            </CardText>
        </Card>
  </MaterialApp>