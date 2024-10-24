import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiUpdateAdverts } from '../../services/adverts';

const EditAdvert = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState({});
  const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
  const navigate = useNavigate();

const token = localStorage.getItem('token')



  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const response = await axios.patch(`${import.meta.env.VITE_BASE_URL}/adverts/${id}`);
        setAdvert(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAdvert();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

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
    
    
      const updated = await apiUpdateAdverts(id, formData);
     
      alert('Advert updated successfully');
      navigate(`/dashboard`);
    } catch (err) {
      console.log(err)
      alert(`Error updating advert: ${err.message}`);
    }
  };

  if (loading) return <div>Loading advert details...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">Edit Advert</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name='title'
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name='description'
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700">Image:</label>
            <input
              type="file"
              name="image"
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="text"
            id="price"
            name='price'
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            name='category'
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditAdvert;
