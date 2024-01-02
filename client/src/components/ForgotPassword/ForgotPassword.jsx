import axios from 'axios';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast, Toaster } from 'react-hot-toast';

const ForgotPassword = ({ userEmail }) => {
  const [email, setEmail] = useState(userEmail || '');

  const handleResetRequest = async (e) => {
    e.preventDefault();
    if (!email) {
      console.error('Email is required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/forgotpassword', { email });

      toast.success('Password reset email sent! Check your email');

      console.log(response.data);
    } catch (error) {
      console.error('Error requesting password reset:', error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Toaster />
        <form className="flex flex-col" onSubmit={handleResetRequest}>
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Request Password Reset
          </button>
        </form>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {
  userEmail: PropTypes.string,
};

export default ForgotPassword;
