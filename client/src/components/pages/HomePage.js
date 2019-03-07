import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users';

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    if (Object.keys(this.props.user).length === 0) {
      this.props.history.push("/login");
    }
  }

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
    user: state.user,
    users: state.users
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers }
)(HomePage);