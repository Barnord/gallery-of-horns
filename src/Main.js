import React from 'react';
import HornedBeast from './HornedBeast.js';
import CardColumns from 'react-bootstrap/CardColumns';


class Main extends React.Component {

  setHornArray = (arr, num) => {
    if (num === 0) {
      return arr
    } else {
      return arr.filter(i => i.horns === num)
    }
  }

  render() {
    let BeastList = this.setHornArray(this.props.beasts,this.props.showHorns).map(i => <HornedBeast beastNumber={this.props.beasts.indexOf(i)} showModal={this.props.showModal} title={i.title} img={i.image_url} alt={i.keyword} description={i.description} />)
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