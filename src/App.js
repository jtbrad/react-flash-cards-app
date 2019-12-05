import React from 'react';
import FlashCardForm from './components/FlashCardForm';
import FlashCards from './components/FlashCards'
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
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
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);

  addFlashCard = (flashCardData) => {
    const flashCard = { id: this.getId(), ...flashCardData, };
    this.setState({ flashCards: [...this.state.flashCards, flashCard], });
  };

  removeFlashCard = (id) => {
    const flashCards = this.state.flashCards.filter( flashCard => {
      if (flashCard.id !== id) {
        return flashCard;
      }
    });
    this.setState({flashCards: flashCards, });
  };

  render() {
    const { flashCards, } = this.state;
    return (
      <Container>
        <Header as="h1">React Flash Cards</Header>
        <br />
        <FlashCardForm addFlashCard={this.addFlashCard}/>
        <br />
        <FlashCards flashCards={flashCards} removeFlashCard={this.removeFlashCard} />
      </Container>
    );
  };
};

export default App;
