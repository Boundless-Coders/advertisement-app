import React, { useEffect, useState } from "react";
import axios from "axios";

const VendorDashboard = () => {
  const [adverts, setAdverts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch adverts for the vendor on component mount
  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        // Make sure to pass the authentication token or vendor id if required
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts`);
        setAdverts(response.data); // Assuming the response data contains an array of adverts
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAdverts();
  }, []);

  if (loading) {
    return <div>Loading your adverts...</div>;
  }

  if (error) {
    return <div>Error fetching adverts: {error}</div>;
  }

  if (!adverts.length) {
    return <div>No adverts found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Adverts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adverts.map((advert) => (
          <div key={advert.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">{advert.title}</h2>
            <img
              src={advert.imageUrl}
              alt={advert.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p>{advert.description}</p>
            <p className="font-semibold mt-2">Price: ${advert.price}</p>
            <p className="text-gray-600">Category: {advert.category}</p>
            <button className="mt-4 bg-red-500 text-white p-2 rounded">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDashboard;
