import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {

  render() {
    const BeastList = this.props.beasts.map(i => <HornedBeast beastNumber={this.props.beasts.indexOf(i)} showModal={this.props.showModal} title={i.title} img={i.image_url} alt={i.keyword} description={i.description} />)
    return (
      <>
        <CardColumns>
          {BeastList}
        </CardColumns>
      </>
    );
  }
}

export default Main;