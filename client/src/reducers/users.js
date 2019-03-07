import { USERS_FETCHED } from '../actions/users';

export default function users(state = [], action = {}) {
  switch (action.type) {
    case USERS_FETCHED:
      return action.users;
    default:
      return state;
  }
}