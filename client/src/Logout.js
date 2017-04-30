import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { routeActions } from 'redux-simple-router';

class Logout extends Component {
  componentWillMount () {
    this.props.dispatch(actions.logout());
    this.props.dispatch(routeActions.push('/'));
  }

  render () {
    return null;
  }
}

export default connect()(Logout);