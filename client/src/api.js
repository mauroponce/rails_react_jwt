import axios from 'axios';

export default {
  user: {
    login: (credentials) => (
      axios.post('/login', { ...credentials }).then(res => (
        res.data.user
      ))
    ),
    logout: () => (
      axios.delete('/logout')
    )
  },
  users: {
    findAll: () => (
      axios.get('/users').then(res => (
        res.data.users
      ))
    )
  }
}