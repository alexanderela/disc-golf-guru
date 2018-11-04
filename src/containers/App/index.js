import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import Nav from '../Nav';
import MainPage from '../MainPage';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      golfCourses: []
    }
  }

  render() {
    return (
      <div className="App">
      	<Header />
      	<Nav />
	      <Switch>
	      	<Route exact path='/' render={() => <Home /> }/>
	    		<Route path='/findcourses' render={() => <MainPage pageName={'Find A Disc Golf Course'}/> }/>
	    		<Route path='/favorites' />
          <Route path='/searchresults' />
          <Route path='/courseinfo' />
	      </Switch>
      </div>
    );
  }
}

export default App;