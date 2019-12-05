import React from 'react';
import FlashCardForm from './FlashCardForm';
import FlashCards from './FlashCards';
import { Button, Container, Header } from 'semantic-ui-react';

class Home extends React.Component {
  state = {
    flashCards: [
      { id: 1,
        question: "What is state?",
        answer: "A JavaScript object that temporarily stores properties.",
      },
      { id: 2, 
        question: "How do you prevent the page from refreshing when the submit button is pressed?",
        answer: "Use the preventDefault function in the submit handler function.",
      },
      { id: 3,
        question: "What npm package is required to use routing in React?", 
        answer: "react-router-dom",
      },
    ],
    showForm: false,
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);

  addFlashCard = (flashCardData) => {
    const flashCard = { id: this.getId(), ...flashCardData, };
    this.setState({ flashCards: [...this.state.flashCards, flashCard], });
  };

  editFlashCard = (id, flashCardData) => {
    const newFlashCard = { id: id, ...flashCardData, };
    const flashCards = this.state.flashCards.map( flashCard => {
      if (flashCard.id === id) {
        return newFlashCard;
      } else {
        return flashCard;
      }
    });
    this.setState({flashCards});
  };

  removeFlashCard = (id) => {
    const flashCards = this.state.flashCards.filter( flashCard => {
      if (flashCard.id !== id) {
        return flashCard;
      }
    });
    this.setState({flashCards: flashCards, });
  };

  toggleForm = () => {
    this.setState({showForm: !this.state.showForm})
  };

  render() {
    const { flashCards, } = this.state;
    return(
      <Container>
        <Header as="h1">React Flash Cards</Header>
        <br />
        <Button onClick={this.toggleForm}>Add Flash Card</Button>
        <br />
        {
          this.state.showForm ?
          <FlashCardForm addFlashCard={this.addFlashCard}/>
          :
          null
        }
        <br />
        <Header as="h2">Click Card To Reveal Answer</Header>
        <FlashCards flashCards={flashCards} editFlashCard={this.editFlashCard} removeFlashCard={this.removeFlashCard} />
      </Container>
    );
  };
};

export default Home;