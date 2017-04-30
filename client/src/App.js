import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from'./Container';
import Login from './Login';
import UserProfile from './UserProfile';
import Home from './Home';
import Signup from './Signup';
import Logout from './Logout';

//different page components

class Contacts extends Component {
  constructor(props) {
    super(props);
    //this.props.dispatch(actions.showContacts(this.props.currentUser));
  }
  render() {
    return (<h1>These Are Your Contacts</h1>);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
       <Route path='/' component={Container} >
        <IndexRoute component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/contacts' component={Contacts} >
           </Route>
         </Route>
      </Router>
    );


  }
}

let mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(App);//{ App, Container, Nav, Home, UserProfile, Contacts };
