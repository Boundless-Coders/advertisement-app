import RootLayout from '../layouts/RootLayout';
import { apiLogin } from '../services/auth';
import { toast } from 'react-toastify';

const LogInForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Sign-in logic
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiLogin({ email, password });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.accessToken);
        
        alert("Login successful!");
      console.log("Response:", response.data);

      //get user profile
      // const profileResponse = await apiGetPofile();
      //  console.log(profileResponse.data)

      } 
    } catch (error) {
      console.error("Login failed:", error);
      
      alert("Login failed. Please try again.");
      console.log("Response:", response.data);

    }
  };
  
  return (
    <RootLayout>
    
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96 relative mt-32 mb-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input name="email"
                type="email"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password:</label>
              <input name="password"
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
    </RootLayout>
  );
};

export default LogInForm;
