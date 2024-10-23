import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-100  h-20  right-32 left-32 mt-4 z-50 rounded-md absolute '>
     
      <div className='logo'>
        <h1 className='text-lg font-bold m-3 ml-8'>CLASSYADS</h1>
      </div>

      
      <ul className='list-none p-0 flex gap-8 font-serif'>
        <li>
          <a href="/" className='no-underline text-black'>Home</a>
        </li>
        <li>
          <a href="/ads" className='no-underline text-black'>Ads</a>
        </li>
        <li>
          <a href="/about" className='no-underline text-black'>About</a>
        </li>
        <li>
          <a href="/contact" className='no-underline text-black'>Contact</a>
        </li>
      </ul>

      <div className='flex gap-4'>
        <div>
          <a href="/login" className='no-underline text-black'>Login</a> / 
          <a href="/register" className='no-underline text-black'> Register</a>
        </div>
        <button>
          <a href="/post-ad" className='no-underline px-4 mr-8 ml-7 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg'>
            +Post Ad
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
