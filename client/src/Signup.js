import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as initialState from './initialState';
import Client from './Client';
//import { routeActions } from 'redux-simple-router';
import './Login.css';

//add name to sign up process
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    Client.addUser(this.state.email, this.state.password, function(result) {
      if (result.response) {
        this.props.dispatch(actions.addUser(this.state.email));  
        //this.props.dispatch(routeActions.push('/userProfile'));
      } 
    }.bind(this));    
  }

  render() {
    return(
      <form name="Signup" onSubmit={this.onSubmit}>
        <h1>Signup Page</h1>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={this.state.email}/>
          </div>
        <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={this.state.password}/>
          </div>
        </div>
        <input type="submit" value="Register" />
      </form>
    );    
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Signup);
