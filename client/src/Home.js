import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Login from './Login';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <h1>This is the Home page</h1>
      );
    } else {
      return (<Login />)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Home);