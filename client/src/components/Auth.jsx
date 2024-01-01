import axios from 'axios';


const isAuthenticated = () => {
    const token = localStorage.getItem('token');

    if (token) {

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      return true; 
    }

    delete axios.defaults.headers.common['Authorization'];
  
    return false; 
  };
  
  export default isAuthenticated;
  