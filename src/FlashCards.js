import React from 'react';
import FlashCard from './FlashCard';
import {Card, } from 'semantic-ui-react';

const FlashCards = ({ flashCards, }) => (
  <Card.Group>
    {
      flashCards.map( flashCard => (
        <FlashCard key={flashCard.id} {...flashCard} />
      ))
    }
  </Card.Group>
);

export default FlashCards;