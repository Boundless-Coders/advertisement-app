import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import RootLayout from '../layouts/RootLayout';
import { apiSignup } from '../services/auth';

const RegisterForm = () => {  
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('user'); // Default role set to 'user'
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(event.target);

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const contactNumber = formData.get("contactNumber");

      
      const payload = { name, email, password, contactNumber, role };
      const response = await apiSignup(payload);

      if (response.status === 200) {
        toast.success("Registration successful!"); 
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again."); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootLayout>
      <ToastContainer /> 
      <div className="flex items-center justify-center min-h-screen bg-blue-100 pt-32 pb-10 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 relative  max-w-sm">
          
          <div className="absolute top-4 right-4 text-sm font-semibold text-gray-600">
            <Link 
              to="/register" 
              onClick={() => setRole("user")} 
              className={`text-blue-500 hover:underline mx-1 ${role === 'user' ? 'font-bold' : ''}`}
            >
              User
            </Link>
            /
            <Link 
              to="/register-vendor" 
              onClick={() => setRole("vendor")} 
              className={`text-blue-500 hover:underline mx-1 ${role === 'vendor' ? 'font-bold' : ''}`}
            >
              Vendor
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Register </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                name="name"
                type="text"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                name="password"
                type="password"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Contact Number:</label>
              <input
                name="contactNumber"
                type="text"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <div className="flex items-center justify-between mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-green-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default RegisterForm;
