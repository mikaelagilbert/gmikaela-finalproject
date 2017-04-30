import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class Container extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Container);