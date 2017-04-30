import React, { Component } from 'react';
import Client from './Client';
import { connect } from 'react-redux';
import * as actions from './actions';
import * as initialState from './initialState';
import './Login.css';
 
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    Client.submitLoginRequest(this.state.email, this.state.password, function(result) {
      if (result.response) {
        this.props.dispatch(actions.loginRequest(this.state.email));
      } 
    }.bind(this));    
  }

  render() {
    return(
      <form name="Login" onSubmit={this.onSubmit}>
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
        <input type="submit" value="Login" />
      </form>
    );   
  }
}

//assign the props from the Login component to the state
const mapStateToProps = (state) => {
  console.log(state)
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Login);
