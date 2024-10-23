import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VendorForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const title = formData.get("title");
    const description = formData.get("description");
    const image = formData.get("image");
    const price = formData.get("price");
    const category = formData.get("category");

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Image:", image);
    console.log("Price:", price);
    console.log("Category:", category);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/adverts`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Advert posted successfully!");
      console.log("Response:", response.data);

      navigate("/dashboard/vendor-dashboard");

    } catch (error) {
      alert("Error posting advert. Please try again.");
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-2 rounded-lg shadow-md w-96">
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
  );
};

export default VendorForm;
