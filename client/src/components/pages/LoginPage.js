import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends Component {
  submit = (data) => {
    return this.props.login(data).then((user) => (
      this.props.history.replace("/")
    ));
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={this.submit.bind(this)} />
      </div>
    )
  }
}

export default connect(
  null, //mapStateToProps
  { login } // action creators
)(LoginPage);