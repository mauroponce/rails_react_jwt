import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users';
import { logout } from '../../actions/auth';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        <h1>Welcome, {user.name}</h1>

        <ul>
          {users.map(u =>
            <li key={u.id}>{u.name} ({u.email})</li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth,
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers, logout }
)(HomePage);