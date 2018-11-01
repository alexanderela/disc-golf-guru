import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header'
import Nav from '../../containers/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Header />
      	<Nav />
      	
      </div>
    );
  }
}

export default App;
