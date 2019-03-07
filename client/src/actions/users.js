import api from '../api';
export const USERS_FETCHED = 'USERS_FETCHED';

function usersFetched(users) {
  return {
    type: USERS_FETCHED,
    users
  }
}

export function fetchUsers() {
  return dispatch => (
    api.users.findAll().then(users =>
      dispatch(usersFetched(users))
    )
  )
}