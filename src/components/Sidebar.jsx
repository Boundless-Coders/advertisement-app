import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Replace these with actual vendor data or API fetch logic
  const vendor = {
    profileImage: 'https://example.com/profile.jpg',  // Replace with actual URL
    name: '',
    email: '',
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <h2 className={`text-2xl font-bold transition-all duration-300 ${!isOpen && 'hidden'}`}>
            My Dashboard
          </h2>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>

        {/* Vendor Profile */}
        <div className="p-4 flex flex-col items-center">
          <img
            className={`rounded-full object-cover transition-all duration-300 ${isOpen ? 'w-16 h-16' : 'w-10 h-10'}`}
            src={vendor.profileImage}
            alt="Vendor profile"
          />
          {isOpen && (
            <div className="text-center mt-2">
              <h3 className="text-xl font-semibold">{vendor.name}</h3>
              <p className="text-sm text-gray-400">{vendor.email}</p>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="mt-4">
          <Link to="/dashboard/vendor-dashboard" className="block p-4 hover:bg-gray-700">
            {isOpen ? 'My advert' : <i className="fas fa-tachometer-alt"></i>}
          </Link>
          <Link to="/vendorfor" className="block p-4 hover:bg-gray-700">
            {isOpen ? 'Post Ad' : <i className="fas fa-box"></i>}
          </Link>
          <Link to="/overview" className="block p-4 hover:bg-gray-700">
            {isOpen ? 'Overview' : <i className="fas fa-tags"></i>}
          </Link>
          <Link to="/settings" className="block p-4 hover:bg-gray-700">
            {isOpen ? 'Settings' : <i className="fas fa-cog"></i>}
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      {/* <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-4">Welcome, {vendor.name}</h1> */}
        {/* Main content goes here */}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
