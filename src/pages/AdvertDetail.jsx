import axios from 'axios';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';



const AdDetail = () => {
  const { id } = useParams();  // Get the advert ID from the URL
  const [advert, setAdvert] = useState(null);  // State to hold the advert details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch advert details based on ID
  useEffect(() => {
    const fetchAdvertDetails = async () => {
      try {
        const response = await axios.get(`/api/adverts/${id}`);
        setAdvert(response.data);  // Set the advert data
      } catch (err) {
        setError(err.message);  // Handle errors
      } finally {
        setLoading(false);  // Update loading state
      }
    };

    fetchAdvertDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!advert) {
    return <div>No advert found</div>;
  }

  return (
    <div className="container mx-auto my-10 p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{advert.title}</h1>
        <img src={advert.imageUrl} alt={advert.title} className="w-full h-64 object-cover rounded mb-4" />
        <p className="text-gray-700 text-lg mb-4">{advert.description}</p>
        <p className="text-xl font-semibold mb-4">Price: ${advert.price}</p>
        <p className="text-gray-600 mb-2">Category: {advert.category}</p>
      </div>
    </div>
  );
};

export default AdDetail;
