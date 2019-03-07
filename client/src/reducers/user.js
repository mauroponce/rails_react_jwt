import { USER_LOGGED_IN } from '../actions/auth';

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;

    default:
      return state;
  }
}