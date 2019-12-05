import React from 'react';
import { Button, Card, } from 'semantic-ui-react';
import FlashCardForm from './FlashCardForm';

class FlashCard extends React.Component {
  state = {
    isFront: true,
    showForm: false,
  };

  flipCard = () => {
    this.setState({isFront: !this.state.isFront});
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  };

  render() {
    return (
      <Card onClick={() => this.flipCard()}>
        <Card.Content>
          {
          this.state.showForm ?
          <FlashCardForm editFlashCard={this.props.editFlashCard} flashCard={this.props.flashCard} toggleForm={this.toggleForm}/>
          :
          <Card.Header>{ this.state.isFront ? this.props.flashCard.question : this.props.flashCard.answer }</Card.Header>
          }
        </Card.Content>
        <Card.Content>
          <Button onClick={this.toggleForm}>Edit</Button>
          <Button onClick={() => this.props.removeFlashCard(this.props.id)}>Remove</Button>
        </Card.Content>
      </Card>
    );
  };
};

export default FlashCard;