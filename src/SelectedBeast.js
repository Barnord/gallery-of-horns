import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal show={this.props.shouldShowModal} onHide={this.props.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.img}
            alt={this.props.alt}
            title={this.props.title} />
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
