import React from 'react';
import RootLayout from '../layouts/RootLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiLogin } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const VendorLogin = () => {
    const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiLogin({ email, password });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        alert('Logged in successfully');
        navigate("/vendor");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.", { autoClose: 5000 });
    }
  };

  return (
    <RootLayout>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-20 mb-10 mx-4 sm:mx-auto">

        
          <h2 className="text-2xl font-bold mb-6 text-center"> Vendor Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                name="email"
                type="email"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password:</label>
              <input
                name="password"
                type="password"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-between mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <a href="/register" className="text-green-500 hover:underline">
                Create an account
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="/forgot-password" className="text-green-500 hover:underline">
                Forgot password?
              </a>
            </p>
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </RootLayout>
  );
};

export default VendorLogin;
