import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-100 h-20 right-32 left-32 mt-4 z-50 rounded-md absolute'>
      <div className='logo'>
        <h1 className='text-lg font-bold m-3 ml-8'>CLASSYADS</h1>
      </div>

      <ul className='list-none p-0 flex gap-8 font-serif'>
        <li>
          <Link to="/" className='no-underline text-black'>Home</Link>
        </li>
        <li>
          <Link to="/adpage" className='no-underline text-black'>Ads</Link> {/* Updated to point to AdPage */}
        </li>
        <li>
          <Link to="/about" className='no-underline text-black'>About</Link>
        </li>
        <li>
          <Link to="/footer" className='no-underline text-black'>Contact</Link>
        </li>
      </ul>

      <div className='flex gap-4'>
        <div>
          <Link to="/login" className='no-underline text-black'>Login</Link> / 
          <Link to="/register" className='no-underline text-black'> Register</Link>
        </div>
        <button>
          <Link to="/vendor" className='no-underline px-4 mr-8 ml-7 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg'>
            +Post Ad
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
