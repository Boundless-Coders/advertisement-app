import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-slate-100 h-20 px-6'>
     
      <div className='logo'>
        <h1 className='text-lg font-bold m-3'>CLASSYADS</h1>
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
          <a href="/login" className='no-underline text-black'>Log In</a> / 
          <a href="/register" className='no-underline text-black'> Register</a>
        </div>
        <div>
          <a href="/post-ad" className='no-underline px-4 py-2 bg-green-500 text-white rounded-lg'>
            +Post an Ad
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
