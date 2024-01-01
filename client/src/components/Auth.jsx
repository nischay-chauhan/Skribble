import axios from 'axios';

const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
    return true;
  }

  delete axios.defaults.headers.common['Authorization'];
  return false;
};

export default isAuthenticated;
