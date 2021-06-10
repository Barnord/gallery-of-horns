import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import HornedBeastData from './resources/HornedBeastData.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowModal: false,
      selectedBeast: HornedBeastData[0],
    };
    
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
        <Main beasts={HornedBeastData} showModal={this.showModal} />
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
