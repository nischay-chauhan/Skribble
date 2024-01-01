import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData);
      toast.success("Successfully logged in!");
      console.log(response.data);
     
      localStorage.setItem("token", response.data.token);
        setTimeout(() => {
          navigate("/about");
        } , 1000)
      
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to log in. Please check your credentials and try again.");
    }
  };

  return (
    <section className="flex md:flex-col h-screen w-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-500">
      <Toaster />
      <div className="container h-full px-6 py-24 grid grid-cols-2">
        <div className="col-span-1 flex justify-center items-center w-full h-full">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </div>
        <div className="col-span-1 ml-10 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-lg font-medium text-white">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border-b rounded-md bg-transparent text-white placeholder-white focus:outline-black focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-lg font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border-b border-white rounded-md bg-transparent text-white placeholder-white focus:outline-black focus:ring focus:border-blue-300"
              />
            </div>
            <Link to={"/register"}>
              <h5 className="text-md font-medium text-white hover:text-black hover:underline hover:text-500 hover:cursor-pointer">
                Not Registered? Sign Up
              </h5>
            </Link>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-white text-primary rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
