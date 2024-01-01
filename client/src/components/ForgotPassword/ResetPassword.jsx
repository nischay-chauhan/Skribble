import { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import  axios  from 'axios';
const ResetPassword = () => {
  const { resetToken } = useParams(); 
  const [password, setPassword] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/users/resetpassword/${resetToken}`, { password });
      console.log(response.data);
    } catch (error) {
      console.error('Error resetting password:', error.response.data.error);
    }
  };

  return (
    <div>
      <label>New Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ResetPassword;
