import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import isAuthenticated from '../Auth';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  const isLoggedIn = isAuthenticated();

  const navItems = isLoggedIn
    ? [
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'About', path: '/about' },
        { id: 3, text: 'Contact', path: '/contact' },
        { id: 6, text: 'Profile', path: '/profile/:id' },
      ]
    : [
        { id: 1, text: 'Home', path: '/' },
        { id: 2, text: 'About', path: '/about' },
        { id: 3, text: 'Contact', path: '/contact' },
        { id: 4, text: 'SignUp', path: '/register' },
        { id: 5, text: 'Login', path: '/login' },
      ];

  return (
    <div className='bg-black flex justify-between items-center h-24 w-screen mx-auto px-4 text-white'>
      <Link className='hover:cursor-pointer' to='/'><h1 className='w-full text-3xl font-bold hover:cursor-pointer text-[#00df9a]'>SCRIBBLE.</h1></Link>

      <ul className='hidden md:flex'>
        {navItems.map((item) => (
          <Link to={item.path} key={item.id} onClick={handleLinkClick}>
            <li
              key={item.id}
              className='p-4 text-xl hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden hover:cursor-pointer'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? 'fixed z-10 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SCRIBBLE.</h1>

        {navItems.map((item) => (
          <Link key={item.id} to={item.path} onClick={handleLinkClick}>
            <li
              key={item.id}
              className='p-4 text-xl border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
