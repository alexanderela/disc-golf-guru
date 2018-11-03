import React, { Component } from 'react';
import './App.css';
import * as DataCleaner from '../../utilities/DataCleaner';
import Header from '../../components/Header';
import Nav from '../Nav';
import MainPage from '../MainPage';
import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      golfCourses: []
    }
  }

  async componentDidMount() {
    // const zip = 14526
    // const golfCourses = await DataCleaner.fetchGolfCoursesByZip(zip)
    // console.log(golfCourses)
    // this.setState({ golfCourses })
  }

  render() {
    return (
      <div className="App">
      	<Header />
      	<Nav />
	      <Switch>
	      	<Route exact path='/' render={() => <MainPage pageName={'Home'}/> }/>
	    		<Route path='/findcourses' render={() => <MainPage pageName={'Find A Course'}/> }/>
	    		<Route path='/favorites' />
	      </Switch>
      </div>
    );
  }
}

export default App;