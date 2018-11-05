import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import Nav from '../Nav';
import MainPage from '../MainPage';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/Home';
import { withRouter } from 'react-router';
import * as DataCleaner from '../../utilities/DataCleaner.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: []
    }
  }

  async componentDidMount() {
    // const zip = 14526
    // const weather = await DataCleaner.fetchCurrentWeatherByZip(zip)
    // console.log(weather)
    // this.setState({ weather })
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
	      </Switch>
      </div>
    );
  }
}

export default withRouter(App);