import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; 
import  axios  from 'axios';
const ResetPassword = () => {
  const { id , resetToken } = useParams(); 
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/users/resetpassword/${id}/${resetToken}`, { password });
      console.log(response.data);

      if (response.data.Status === 'Success') {
        navigate('/login');
      } else {
        console.error('Password reset failed:', response.data.error);
      }
    } catch (error) {
      console.error('Error resetting password:', error.response.data.error);
    }
  };
  

  return (
    <div className='flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <label className=' block text-gray-700 text-sm font-bold mb-2'>New Password:</label>
      <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
