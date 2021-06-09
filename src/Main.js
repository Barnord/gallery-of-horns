import React from 'react';
import HornedBeast from './HornedBeast.js';
import HornedBeastData from './resources/HornedBeastData.json';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {
  render() {
    const BeastList = HornedBeastData.map(i => <HornedBeast title={i.title} img={i.image_url} alt={i.keyword} description={i.description} />)
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