import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="mt-16 max-w-md mx-auto ">
        <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b rounded-md text-black transition-all duration-300 focus:border-[#00df9a] hover:border-gradient"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b rounded-md text-black transition-all duration-300 focus:border-[#00df9a] hover:border-gradient"
              required
            />
          </div>

          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-b rounded-md text-black transition-all duration-300 focus:border-[#00df9a] hover:border-gradient"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#00df9a] text-white p-2 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
