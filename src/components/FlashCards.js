import React from 'react';
import FlashCard from './FlashCard';
import {Card, } from 'semantic-ui-react';

const FlashCards = ({ flashCards, editFlashCard, removeFlashCard, }) => (
  <Card.Group>
    {
      flashCards.map( flashCard => (
        <FlashCard key={flashCard.id} flashCard={flashCard} editFlashCard={editFlashCard} removeFlashCard={removeFlashCard} />
      ))
    }
  </Card.Group>
);

export default FlashCards;