import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let navOptions = this.props.loggedIn ? (
      <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/userProfile'>Profile</Link>&nbsp;
        <Link to='/contacts'>Contacts</Link>&nbsp;
        <Link to='/logout'>Logout</Link>
      </div>
    ) : (
      <div>
        <Link to='/'>Login</Link>&nbsp;
        <Link to='/signup'>Sign Up</Link>
      </div>
    )

    return (
      <div>
        {navOptions}
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

export default connect(mapStateToProps)(Nav);
