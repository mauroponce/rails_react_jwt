import api from '../api';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';

export function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    user
  };
}

export function login(credentials) {
  return dispatch =>
    api.user.login(credentials).then((user) =>
      dispatch(userLoggedIn(user))
    )

}