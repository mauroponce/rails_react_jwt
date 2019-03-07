import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import isEmail from 'validator/lib/isEmail';

class LoginForm extends Component {
  state = {
    fields: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      fields: { ...this.state.fields, [name]: value }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.fields);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.onSubmit(this.state.fields)
    }
  }

  validate = (fields) => {
    const errors = {};
    if (!fields.email) {
      errors.email = 'Enter an email';
    } else if (!isEmail(fields.email)) {
      errors.email = 'Email is not valid';
    }
    if (!fields.password) errors.password = 'Enter a password';
    return errors;
  }

  render() {
    const { fields, errors } = this.state;
    const { email, password } = fields;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='example@example.com'
            value={email}
            onChange={this.onChange}
          />
          {
            errors.email &&
            <span className="error">{errors.email}</span>
          }
        </Form.Field>

        <Form.Field error={!!errors['password']}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='Your Secure Password'
            value={password}
            onChange={this.onChange}
          />
          {
            errors.password &&
            <span className="error">{errors.password}</span>
          }
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;