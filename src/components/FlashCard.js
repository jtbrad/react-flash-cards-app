import React from 'react';
import { Button, Card, } from 'semantic-ui-react';

class FlashCard extends React.Component {
  state = {isFront: true};

  flipCard = () => {
    this.setState({isFront: !this.state.isFront});
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{ this.state.isFront ? this.props.question : this.props.answer }</Card.Header>
        </Card.Content>
        <Card.Content>
          <Button onClick={() => this.flipCard()}>Flip Card</Button>
          <Button onClick={() => this.props.removeFlashCard(this.id)}>Remove</Button>
        </Card.Content>
      </Card>
    );
  };
};

export default FlashCard;