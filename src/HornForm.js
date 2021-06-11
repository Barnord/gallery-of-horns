import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class HornForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showHorns: 0
    };
  }

  sendHorns = e => {
    e.preventDefault();
    this.props.sendHorns(e.target.hornSelector.value)
    // console.log(e.target.hornSelector.value)
  }

  render() {
    return (
      <>
        <Form onSubmit={this.sendHorns}>
          <Form.Group controlId="hornSelector">
            <Form.Label>Number of Horns</Form.Label>
            <Form.Control as="select">
              <option value="0">All the horns!</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Or more horns!</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">Show me the beasts!</Button>
        </Form>
      </>
    );
  }
}

export default HornForm;