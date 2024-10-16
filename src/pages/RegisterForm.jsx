import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
    // Continue with registration logic
  };

  const handleFacebookSignIn = () => {
    // Add your Facebook sign-in logic here
    console.log('Register with Facebook');
  };

  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
    console.log('Register with Google');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
            onClick={handleFacebookSignIn}
            className="flex items-center justify-center bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Register with Facebook
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
          >
            Register with Google
          </button>
        </div>
        <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-green-500 hover:underline">
              Signin here
              </Link>
            </p>
          </div>
      </div>
    </div>
  );
};

export default RegisterForm;
