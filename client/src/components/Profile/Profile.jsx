import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const Profile = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await axios.post('http://localhost:5000/api/users/logout');
      localStorage.removeItem('token');
      toast.success('Successfully logged out!');
      
      setTimeout(() => {
        navigate('/login');
      }, 1000); 
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <Toaster />
      <h1>Profile</h1>
      <button className="px-2 py-4 rounded text-lg bg-red-500 text-white hover:scale-105" onClick={handleClick}>
        LOGOUT
      </button>
    </div>
  );
};

export default Profile;
