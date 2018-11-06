import React, { Component } from 'react';
import './App.css';
import Header from '../../components/Header';
import CardContainer from '../../components/CardContainer';
import Nav from '../Nav';
import MainPage from '../MainPage';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/Home';
import Error from '../../components/Error';
import { withRouter } from 'react-router';
import * as DataCleaner from '../../utilities/DataCleaner.js';

class App extends Component {

  render() {
    return (
      <div className="App">
      	<Header />
      	 <Nav />
	      <Switch>
	      	<Route exact path='/' render={() => <Home /> }/>
	    		<Route path='/findcourses' render={() => <MainPage pageName={'Find A Disc Golf Course'}/> }/>
          <Route path='/favorites' render={() => <CardContainer favorites={'favorites'}/> }/>
          <Route path='*' exact={true} render={() => <Error message='The page you are looking for does not exist.'/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);