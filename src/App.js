import React from 'react';
import FlashCardForm from './FlashCardForm';
import FlashCards from './FlashCards'
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    flashCards: [
      { id: 1, question: "question 1", answer: "answer 1", isFront: false, },
      { id: 2, question: "question 2", answer: "answer 2", isFront: false, },
      { id: 3, question: "question 3", answer: "answer 3", isFront: false, },
    ],
  };

  getId = () => Math.floor((1 + Math.random()) * 10000);

  addFlashCard = (flashCardData) => {
    let flashCard = { id: this.getId(), ...flashCardData, isFront: false, }
    this.setState({ flashCards: [...this.state.flashCards, flashCard], })
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
        <FlashCards flashCards={flashCards} removeFlashCard={this.removeFlashCard} />
      </Container>
    );
  };
};

export default App;
