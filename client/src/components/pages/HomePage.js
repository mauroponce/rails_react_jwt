import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    if (Object.keys(this.props.user).length === 0) {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome, {this.props.user.name}</h1>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  {}
)(HomePage);