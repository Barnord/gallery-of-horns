import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import HornedBeastData from './resources/HornedBeastData.json';
import HornForm from './HornForm.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowModal: false,
      selectedBeast: HornedBeastData[0],
      showHorns: 0
    };
    
  }

  sendHorns = hornNumber => {
    this.setState({
      showHorns: Number(hornNumber)
    })
    console.log(this.state.showHorns)
  }
  
  showModal = beastNumber => {
    this.setState({shouldShowModal: true,
      selectedBeast: HornedBeastData[beastNumber]
    });
  }

  hideModal = () => this.setState({shouldShowModal: false});

  render() {
    return (
      <>
        <Header />
        <HornForm sendHorns={this.sendHorns} />
        <Main beasts={HornedBeastData} showModal={this.showModal} showHorns={this.state.showHorns} />
        <Footer />
        <SelectedBeast
        shouldShowModal={this.state.shouldShowModal}
        hideModal={this.hideModal}
        title={this.state.selectedBeast.title}
        img={this.state.selectedBeast.image_url}
        alt={this.state.selectedBeast.keyword}
        description={this.state.selectedBeast.description} 
        />
      </>
    );
  }
}
export default App;
