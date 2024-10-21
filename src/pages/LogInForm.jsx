import React, { useState } from 'react';
import RootLayout from '../layouts/RootLayout';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };



  const handleGoogleLogIn = () => {
    // Add your Google sign-in logic here
    console.log('Login with Google');
  };

  return (
  <RootLayout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 mx-24 my-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="mt-4 flex flex-col space-y-2">
          
          <button
            onClick={handleGoogleLogIn}
            className="flex items-center justify-center bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
          >
            Login with Google
          </button>

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
  </RootLayout>
  );
};

export default LogInForm;
