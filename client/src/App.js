import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import SelectedFoods from './SelectedFoods';
import FoodSearch from './FoodSearch';
import Client from './Client';

class Container extends Component {

  componentDidMount() {
    var props = this.props.route.globalState;
    Client.getUserInfo(function(result){
      console.log(result);
      props.setState({name: result});
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
    return (<h1>{this.props.route.globalState.name} Profile</h1>);
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
    this.state = {
      name: ''
    }
  }
  render() {

    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container} globalState={this.state} >
          <IndexRoute component={Home} />
          <Route path='/userProfile' component={UserProfile} globalState={this.state} />
          <Route path='/contacts' component={Contacts} >
            <IndexRoute component={SingleContact} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
