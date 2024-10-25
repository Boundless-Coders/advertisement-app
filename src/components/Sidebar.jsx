import axios from 'axios';
import React, {   useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [vendor, setVendor] = useState({
    // profileImage: '',
    role: '',
    name: '',
    email: '',
    contactNumber: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Fetch vendor data from API using axios
  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/profile'); // Update this URL to your API endpoint
        setVendor({
          // profileImage: response.data.profileImage,
          role: response.data.role,
          name: response.data.name,
          email: response.data.email,
          contactNumber: response.data.contactNumber,
        });
      } catch (err) {
        setError('Failed to fetch vendor data');
      } finally {
        setLoading(false);
      }
    };

    fetchVendorData();
  }, []);

  return (
    <div className="h-screen sticky top-0">
      {/* Sidebar */}
      <div className={`bg-[#163b41] text-white h-screen ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
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
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <>
              {/* {vendor.profileImage && (
                <img
                  className={`rounded-full object-cover transition-all duration-300 ${isOpen ? 'w-16 h-16' : 'w-10 h-10'}`}
                  src={vendor.profileImage}
                  alt="Vendor profile"
                />
              )} */}
              {isOpen && (
                <div className="text-center mt-2">
                  <h3 className="text-xl font-semibold">{vendor.role}</h3>
                  <h3 className="text-xl font-semibold">{vendor.name}</h3>
                  <p className="text-sm text-gray-400">{vendor.email}</p>
                  <p className="text-sm text-gray-400">{vendor.contactNumber}</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Navigation Links */}
        <div className="mt-4">
          <Link to="/" className="block p-4 hover:bg-gray-700 text-lg font-semibold">
            {isOpen ? 'Home' : <i className="fa fa-tachometer-alt"></i>}
          </Link>
          <Link to="/dashboard" className="block p-4 hover:bg-gray-700 text-lg font-semibold">
            {isOpen ? 'My advert' : <i className="fas fa-tachometer-alt"></i>}
          </Link>
          <Link to="/vendor" className="block p-4 hover:bg-gray-700 text-lg font-semibold">
            {isOpen ? 'Post Ad' : <i className="fa fa-box"></i>}
          </Link>
          <Link to="/overview" className="block p-4 hover:bg-gray-700 text-lg font-semibold">
            {isOpen ? 'Overview' : <i className="fa fa-tags"></i>}
          </Link>
          <Link to="/settings" className="block p-4 hover:bg-gray-700 text-lg font-semibold">
            {isOpen ? 'Settings' : <i className="fa fa-cog"></i>}
          </Link>
          <Link to="" className="block p-4 hover:bg-gray-700 text-lg font-semibold">
            {isOpen ? 'Logout' : <i className="fa fa-sign-out-alt"></i>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
