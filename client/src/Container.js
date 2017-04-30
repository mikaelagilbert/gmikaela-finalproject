import React, { Component } from 'react';
import { Link, Redirect } from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';
import Client from './Client';
import Home from './Home';
import Nav from './Nav';


class Container extends Component {
  constructor(props) {
    super(props)
  }
 
  componentDidMount() {
    // Client.getUserInfo(function(result){
    //   console.log(result);
    //   var name = result;
    //   this.props.dispatch(actions.setUserName(name));
      
    //   // this.props.store.subscribe(function () {
    //   //   this.props.store.setState({name: result});
    //   //   console.log('inside subscribe');
    //   // })
    // }.bind(this));
    // console.log('component did mount')
  }

  render() {
    // if (this.props.loggedIn) {
      return (
        <div>
          <Nav />
          {this.props.children}
        </div>
      );
    // } else {
    //   return (<Redirect to="/login"/>);
    // }
  }
} 

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Container);