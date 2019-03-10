import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';

class LoginPage extends Component {
  submit = (data) => {
    return this.props.login(data).then((user) => (
      this.props.history.replace("/")
    ));
  }

  render() {
    const { user } = this.props;
    if (user) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onSubmit={this.submit.bind(this)} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth
  }
}

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);