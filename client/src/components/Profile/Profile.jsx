import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

// ... (imports)

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
          setUser(user);
        } else {
          setError("User data not found");
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setError('Error fetching user profile. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500">
      <Toaster />
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : user ? (
          <div className="text-left">
            <p className="text-lg">
              <span className="font-bold">Name:</span> {user.name}
            </p>
            <p className="text-lg">
              <span className="font-bold">Email:</span> {user.email}
            </p>
          </div>
        ) : (
          <p>User data not available</p>
        )}
        <button
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:scale-105 transition-transform"
          onClick={handleClick}
        >
          LOGOUT
        </button>
        {user && <ForgotPassword userEmail={user.email} />}
      </div>
    </div>
  );
};

export default Profile;
