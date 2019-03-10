import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/auth';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        loggedIn: true,
        user: action.user
      };
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
}