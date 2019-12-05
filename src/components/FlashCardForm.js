import React from 'react';
import { Form, } from 'semantic-ui-react';

class FlashCardForm extends React.Component {
  state = { question: "", answer: "", };

  componentDidMount() {
    if (this.props.id !== null) {
      this.setState({ ...this.props.flashCard })
    }
  };
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.flashCard.id !== null) {
      this.props.editFlashCard(this.props.flashCard.id, this.state);
      this.props.toggleForm();
    } else {
      this.props.addFlashCard(this.state);
    }
    this.setState({ question: "", answer: "", });
  };

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          fluid
          label={"Question"}
          placeholder="Enter Question"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
        />
        <Form.Input 
          fluid
          label={"Answer"}
          placeholder="Enter Answer"
          name="answer"
          value={this.state.answer}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  };
};

export default FlashCardForm;