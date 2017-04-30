import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from'./Container';
import Login from './Login';
import UserProfile from './UserProfile';
import Home from './Home';
import Signup from './Signup';
import Logout from './Logout';
import Contacts from './Contacts';

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

export default connect(mapStateToProps)(App);
