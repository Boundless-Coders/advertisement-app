import RootLayout from '../layouts/RootLayout';
import { Link } from 'react-router-dom';
import { apiSignup } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import '../components/AuroraBackground';

const VendorRegisterForm = () => {

    const [loading, setLoading] = useState(true)
const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault() // prevent the page from reloading

    try {
        
        //prepare data to be sent to backe
        setLoading(true)
        const formData = new FormData(event.target) // takes data from the form

        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")
        const contactNumber = formData.get("contactNumber")
        const businessName = formData.get("businessName")
        const businessAddress = formData.get("businessAddress")
         const role = formData.get("role")
        console.log("name", name)


        const payload = {name, contactNumber, email, password, role:"vendor"}
        const response = await apiSignup(payload)
        console.log(response.data)
        navigate("/login")
        
    } catch (error) {
       console.log(error) 
    } finally{
        setLoading(false)
    }
   
    
  };

  return (
    <RootLayout>
      <div className='h-fit'>
      <div className=" pt-32 flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
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
                placeholder=""
              />
            </div>

            
            <button
              type="submit"
              className="w-[150px] ml-36	 bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
            >
             Register
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
