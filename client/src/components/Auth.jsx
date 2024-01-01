// isAuthenticated.js

import axios from 'axios';

const isAuthenticated = () => {
  const token = localStorage.getItem('user'); // Change 'token' to 'user'

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return true;
  } else {
    delete axios.defaults.headers.common['Authorization'];
    return false;
  }
};

export default isAuthenticated;
