import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import * as actions from './actions';
import * as initialState from './initialState.js';
import SelectedFoods from './SelectedFoods';
import FoodSearch from './FoodSearch';
import Client from './Client';

class Container extends Component {
 
  componentDidMount() {
    Client.getUserInfo(function(result){
      console.log(result);
      var name = result;
      this.props.store.dispatch(actions.setUserName(name));
      // this.props.store.subscribe(function () {
      //   this.props.store.setState({name: result});
      //   console.log('inside subscribe');
      // })
    });
    console.log('component did mount')
  }

  render() {
    return (
    <div>
      <Nav />
      {this.props.children}
    </div>);
  }
} 

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/userProfile'>Profile</Link>&nbsp;
        <Link to='/contacts'>Contacts</Link>
      </div>
    );
  }
}

//different page components
class Home extends Component {
  render() {
    return (<h1>This is the home page</h1>);
  }
}

class UserProfile extends Component {
  render() {
    return (<h1>Your Profile</h1>);
    //return (<h1>{this.props.store.name} Profile</h1>);
  }
}

class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<h1>These Are Your Contacts</h1>);
  }
}

class SingleContact extends Component {
  render() {
    return (<h2>This is a single contact</h2>);
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState;
  }

  componentDidMount () {
    console.log('App component mounted')
    this.props.store.subscribe(function () {
      this.setState(this.props.store.getState());
    }.bind(this));
  }

  render() {

    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container} >
          <IndexRoute component={Home} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/contacts' component={Contacts} >
            <IndexRoute component={SingleContact} />
          </Route>
        </Route>
      </Router>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object.isRequired
}
export default App;//{ App, Container, Nav, Home, UserProfile, Contacts };
