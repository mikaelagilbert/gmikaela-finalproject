import React, { Component } from 'react';
import { connect } from 'react-redux';
class Contacts extends Component {
  constructor(props) {
    super(props);
    //this.props.dispatch(actions.showContacts(this.props.currentUser));
  }
  render() {
    return (
      <h1>These Are Your Contacts</h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(Contacts);