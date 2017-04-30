import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('UserProfile mounted')
  }

  render() {
    if (this.props.loggedIn) {
      return (<h1>{this.props.currentUser} Profile</h1>);
    } else {
      return(<h1>You aren't logged in</h1>);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(UserProfile);
