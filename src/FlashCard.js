import React from 'react';
import { Card, } from 'semantic-ui-react';

const FlashCard = ({ question, }) => (
  <Card>
    <Card.Content>
      <Card.Header>{ question }</Card.Header>
    </Card.Content>
  </Card>
);

export default FlashCard;