import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchUsers } from '../../actions/users';
import { logout } from '../../actions/auth';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { auth, users } = this.props;
    const { loggedIn, user } = auth;

    if (!loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <h1>Welcome, {user.name}</h1>

        <ul>
          {users.map(u =>
            <li key={u.id}>{u.name} ({u.email})</li>
          )}
        </ul>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers, logout }
)(HomePage);