import React from 'react';
import FlashCard from './FlashCard';
import {Card, } from 'semantic-ui-react';

const FlashCards = ({ flashCards, flipCard, removeFlashCard, }) => (
  <Card.Group>
    {
      flashCards.map( flashCard => (
        <FlashCard key={flashCard.id} {...flashCard} flipCard={flipCard} removeFlashCard={removeFlashCard} />
      ))
    }
  </Card.Group>
);

export default FlashCards;