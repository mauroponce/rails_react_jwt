import api from '../api';
export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

export function userLoggedIn(user) {
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: USER_LOGGED_IN,
    user
  };
}

export function userLoggedOut() {
  return {
    type: USER_LOGGED_OUT
  };
}

export function login(credentials) {
  return dispatch =>
    api.user.login(credentials).then((user) =>
      dispatch(userLoggedIn(user))
    )
}

export function logout() {
  return dispatch =>
    api.user.logout().then(() =>
      dispatch(userLoggedOut())
    )
}