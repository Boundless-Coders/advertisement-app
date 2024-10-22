import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';

const RegisterForm = ({ role = 'user/vendor' }) => {  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Role:', role);
    console.log('Password:', password);
    // Continue with registration logic
  };

  const handleGoogleSignIn = () => {
    
    console.log('Register with Google');
  };

  return (
    <RootLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-24 my-10">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 relative">
         
          <div className="absolute top-4 right-4 text-sm font-semibold text-gray-600">
            <Link to="/register" className="text-blue-500 hover:underline mx-1">
              User
            </Link>
            /
            <Link to="/register-vendor" className="text-blue-500 hover:underline mx-1">
              Vendor
            </Link>
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Register
            </button>
          </form>
          <div className="flex items-center justify-between mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <div className="mt-4 flex flex-col space-y-2">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition w-10 h-10 mx-auto"
              title="Register with Google"
            >
              G
            </button>
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
