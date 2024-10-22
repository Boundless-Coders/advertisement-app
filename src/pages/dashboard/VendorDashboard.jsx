import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DashboardLayout from '../../layouts/DashboardLayout'; 

const VendorDashboard = () => {
  const [adverts, setAdverts] = useState([]); // Initialize with an empty array
  const [editingAdvert, setEditingAdvert] = useState(null);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await axios.get('your-api-endpoint'); // Replace with your actual API endpoint
        console.log('API response:', response.data); // Log the API response
        
        
        setAdverts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching adverts:', error);
      }
    };

    fetchAdverts(); 
  }, []); 

  const handleDelete = (id) => {
    setAdverts(adverts.filter(ad => ad.id !== id));
  };

  const handleEdit = (advert) => {
    setEditingAdvert(advert);
  };

  const handleSave = (updatedAdvert) => {
    setAdverts(adverts.map(ad => (ad.id === updatedAdvert.id ? updatedAdvert : ad)));
    setEditingAdvert(null);
  };

  return (
    <DashboardLayout>
      <div className="p-8 bg-gray-100 flex-1">
        <h2 className="text-2xl font-bold mb-6">Vendor Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add a check to make sure adverts is an array before mapping */}
          {Array.isArray(adverts) && adverts.length > 0 ? (
            adverts.map(ad => (
              <div key={ad.id} className="bg-white p-4 rounded shadow">
                <img src={ad.image} alt={ad.title} className="w-full h-32 object-cover mb-2 rounded" />
                <h3 className="text-xl font-semibold">{ad.title}</h3>
                <p className="text-gray-600">{ad.description}</p>
                <p className="text-lg font-bold">${ad.price}</p>
                <p className="text-gray-500">Category: {ad.category} - {ad.subCategory}</p>
                <div className="mt-4">
                  <button onClick={() => handleEdit(ad)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(ad.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No adverts available at the moment.</p>  // Show a message when no adverts are found
          )}
        </div>
        {editingAdvert && (
          <EditAdvertForm advert={editingAdvert} onSave={handleSave} onCancel={() => setEditingAdvert(null)} />
        )}
      </div>
    </DashboardLayout>
  );
};

// EditAdvertForm component remains unchanged
const EditAdvertForm = ({ advert, onSave, onCancel }) => {
  const [title, setTitle] = useState(advert.title);
  const [description, setDescription] = useState(advert.description);
  const [price, setPrice] = useState(advert.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...advert, title, description, price });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Edit Advert</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Save
            </button>
            <button type="button" onClick={onCancel} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorDashboard;
