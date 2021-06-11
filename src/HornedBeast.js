import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    };
  }

  increaseLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  }

  showModal = () => this.props.showModal(this.props.beastNumber);

  render() {
    return (
      <>
        <Card style={{ width: '18rem'}}>
          <Card.Img onClick={this.showModal} beastNumber={this.props.beastNumber} src={this.props.img} alt={this.props.alt} title={this.props.title} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={this.increaseLikes}>Like!</Button>
            <span>💝 </span>{this.state.likes}
          </Card.Footer>
        </Card>
      </>
    );
  }
}

export default HornedBeast;