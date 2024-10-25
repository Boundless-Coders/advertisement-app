import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const VendorForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      // Log the form data for debugging
      console.log("Submitting form with data:", Object.fromEntries(formData.entries()));

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/adverts`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Show success notification
      if (response.status === 201)
      toast.success("Advert posted successfully!", { autoClose: 3000 });
      console.log("Response:", response.data);
      
      navigate("/dashboard");

    } catch (error) {
      // Show error notification
      toast.error("Error posting advert. Please try again.", { autoClose: 5000 });
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <RootLayout>
      <div className="flex items-center justify-center min-h-screen bg-blue-1+00 ">
        <div className="bg-white p-6 rounded-lg shadow-md w-96 mt-32 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Post an Advert</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Title:</label>
              <input
                type="text"
                name="title"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description:</label>
              <textarea
                name="description"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image:</label>
              <input
                type="file"
                name="image"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price:</label>
              <input
                type="text"
                name="price"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category:</label>
              <select
                name="category"
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a category</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="fashion">Fashion</option>
                <option value="vehicles">Vehicles</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-[150px] flex justify-center mx-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Post
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </RootLayout>
  );
};

export default VendorForm;
