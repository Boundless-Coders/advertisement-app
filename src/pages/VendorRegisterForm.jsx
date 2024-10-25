import RootLayout from '../layouts/RootLayout';
import { Link, useNavigate } from 'react-router-dom';
import { apiSignup } from '../services/auth';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const VendorRegisterForm = () => {
  const [loading, setLoading] = useState(false); // Changed to false initially
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the page from reloading

    try {
      setLoading(true);
      // Prepare data to be sent to backend
      const formData = new FormData(event.target); // Takes data from the form

      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const contactNumber = formData.get("contactNumber");
      const role = "vendor"; // Default role for vendor
      console.log("name", name);

      const payload = { name, contactNumber, email, password, role };
      const response = await apiSignup(payload);

      // Check if response indicates success
      if (response.status === 200) {
        toast.success("Registration successful!"); // Success notification
        navigate("/login");
      } else if (response.status === 409) { // Assuming 409 for already existing user
        toast.error("User already exists. Please use a different email."); // User exists notification
      } else {
        toast.error("Registration failed. Please try again."); // General error notification
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again."); // Error notification
    } finally {
      setLoading(false);
    }
  };

  return (
    <RootLayout>
      <ToastContainer /> {/* Toast container for displaying notifications */}
      <div className='h-fit'>
        <div className="pt-32 flex items-center justify-center min-h-screen bg-gradient-to-r bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg border border-gray-200">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Vendor Registration
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name='name'
                  required
                  className="mt-2 p-3 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name='email'
                  required
                  className="mt-2 p-3 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name='password'
                  required
                  className="mt-2 p-3 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="text"
                  name='contactNumber'
                  required
                  className="mt-2 p-3 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                  placeholder="Enter your contact number"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-blue-500 hover:underline hover:text-blue-600 transition duration-200"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default VendorRegisterForm;
