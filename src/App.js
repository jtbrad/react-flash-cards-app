import React from 'react';
import FlashCards from './FlashCards'
import { Container, Header } from 'semantic-ui-react';

class App extends React.Component {
  state = {
    flashCards: [
      { id: 1, question: "question 1", answer: "answer 1" },
      { id: 2, question: "question 2", answer: "answer 2" },
      { id: 3, question: "question 3", answer: "answer 3" },
    ],
  };

  render() {
    const { flashCards, } = this.state;
    return (
      <Container>
        <Header as="h1">React Flash Cards</Header>
        <br />
        <FlashCards flashCards={flashCards} />
      </Container>
    );
  };
};

export default App;
