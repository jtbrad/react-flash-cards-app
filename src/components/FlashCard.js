import React from 'react';
import { Button, Card, } from 'semantic-ui-react';

class FlashCard extends React.Component {
  state = {isFront: true};

  flipCard = () => {
    this.setState({isFront: !this.state.isFront});
  };

  render() {
    return (
      <Card onClick={() => this.flipCard()}>
        <Card.Content>
          <Card.Header>{ this.state.isFront ? this.props.question : this.props.answer }</Card.Header>
        </Card.Content>
        <Card.Content>
          <Button>Edit</Button>
          <Button onClick={() => this.props.removeFlashCard(this.props.id)}>Remove</Button>
        </Card.Content>
      </Card>
    );
  };
};

export default FlashCard;