import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VendorDashboard = () => {
  const [adverts, setAdverts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch adverts for the vendor on component mount
  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        // Make sure to pass the authentication token or vendor id if required
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/me/adverts`);
        setAdverts(response.data); // Assuming the response data contains an array of adverts
        setLoading(false);
        console.log(response.data)
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


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/adverts/${id}`);
      setAdverts(adverts.filter(advert => advert.id !== id)); // Remove advert from state after deletion
    } catch (err) {
      console.error("Error deleting advert:", err);
    }
  };


  const handleEdit = (id) => {
    // Assuming you're using react-router-dom for navigation
    navigate(`/dashboard/edit-advert/${id}`);
  };






  return (
    <div className="container mx-auto p-4 bg-blue-100">
      <h1 className="text-2xl font-bold mb-6">Your Adverts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adverts && adverts.map((advert) => (
          <div key={advert?.id} className="bg-white shadow-md rounded-lg p-4">
            <Link to={`/dashboard/advert-details/${advert.id}`}> <h2
              className="text-xl font-semibold cursor-pointer"

            >
              {advert.title}
            </h2></Link>

            <img
              src={`https://savefiles.org/${advert.image}?shareable_link=439`}
              alt={advert.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <p>{advert.description}</p>
            <p className="font-semibold mt-2">Price: ${advert.price}</p>
            <p className="text-gray-600">Category: {advert.category}</p>
            <div className="flex gap-2">
              

              <Link to={`/dashboard/edit-advert/${advert?.id}`}>
                <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">

                  Edit
                </button>
              </Link>

              <button
                className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
                onClick={() => handleDelete(advert?.id)}
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDashboard;