import React from 'react';
import FlashCardForm from './components/FlashCardForm';
import FlashCards from './components/FlashCards'
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    flashCards: [
      { id: 1, question: "question 1", answer: "answer 1", isFront: true, },
      { id: 2, question: "question 2", answer: "answer 2", isFront: true, },
      { id: 3, question: "question 3", answer: "answer 3", isFront: true, },
    ],
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);

  addFlashCard = (flashCardData) => {
    let flashCard = { id: this.getId(), ...flashCardData, isFront: false, }
    this.setState({ flashCards: [...this.state.flashCards, flashCard], })
  };

  flipCard = (id) => {
    const flashCards = this.state.flashCards.map( flashCard => {
      if (flashCard.id === id) {
        return flashCard;
      }
    });
  };

  removeFlashCard = (id) => {
    const flashCards = this.state.flashCards.filter( flashCard => {
      if (flashCard.id !== id) {
        return flashCard;
      }
    });
    this.setState({flashCards: [...flashCards], });
  };

  render() {
    const { flashCards, } = this.state;
    return (
      <Container>
        <Header as="h1">React Flash Cards</Header>
        <br />
        <FlashCardForm addFlashCard={this.addFlashCard}/>
        <br />
        <FlashCards flashCards={flashCards} flipCard={this.flipCard} removeFlashCard={this.removeFlashCard} />
      </Container>
    );
  };
};

export default App;
