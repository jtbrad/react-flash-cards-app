import React from 'react';
import { Button, Card, } from 'semantic-ui-react';

const FlashCard = ({ id, question, removeFlashCard }) => (
  <Card>
    <Card.Content>
      <Card.Header>{ question }</Card.Header>
    </Card.Content>
    <Card.Content>
      <Button onClick={() => removeFlashCard(id)}>Remove</Button>
    </Card.Content>
  </Card>
);

export default FlashCard;