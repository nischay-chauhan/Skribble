import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className=" h-screen w-screen bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-500">
      <div className="container h-full px-6 py-24 grid grid-cols-2">

        <div className="mb-12 md:mb-0 col-span-1 flex justify-center items-center">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-3/4 md:w-full lg:w-2/3 xl:w-1/2"
            alt="Phone image"
          />
        </div>


        <div className="col-span-1 flex flex-col justify-center md:w-8/12 lg:w-5/12">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="text-lg  font-medium text-white">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border border-white rounded-md bg-transparent text-white placeholder-white focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="text-ldg font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border border-white rounded-md bg-transparent text-white placeholder-white focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="text-lg font-medium text-white">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full px-4 py-2 mt-2 border border-white rounded-md bg-transparent text-white placeholder-white focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-white text-primary rounded-md hover:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
