import axios from 'axios';

class Users {
  static all() {
    return axios.get('/users.json').then(response => response.data);
  }
}

export default Users;
