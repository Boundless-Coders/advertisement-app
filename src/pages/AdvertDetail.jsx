import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Ensure this is imported

const AdvertDetail = () => {
  const { id } = useParams(); // Get the advert ID from the URL
  const [advert, setAdvert] = useState(null); // State to hold the advert details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch advert details based on ID
  useEffect(() => {
    const fetchAdvertDetails = async () => {
      try {
        const response = await axios.get(`https://ads-app-backend-1.onrender.com/adverts/${id}`); // Correct API endpoint
        setAdvert(response.data); // Set the advert data
      } catch (err) {
        console.error("Error fetching advert details:", err); // Log error for debugging
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchAdvertDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  if (!advert) {
    return <div>No advert found</div>; // Handle no advert case
  }

  return (
    <div className="container mx-auto my-10 flex space-x-4"> {/* Flex container */}
      {/* First Container */}
      <div className="bg-gray-200 shadow-md rounded-lg p-6 w-1/2 flex flex-col"> {/* Updated color */}
        {/* Advert Title */}
        <h1 className="text-3xl font-bold mb-4">{advert.title}</h1>

        {/* Advert Image */}
        <img
          src={`https://savefiles.org/${advert.image}?shareable_link=439`} // Updated image URL
          alt={advert.title}
          className="w-full h-64 object-cover rounded mb-4"
        />

        {/* Price */}
        <p className="text-xl font-semibold mb-4">Price: ${advert.price}</p>

        {/* Category */}
        <p className="text-gray-600 mb-2">Category: {advert.category}</p>

        {/* Additional Features */}
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2"></h2>
          <ul className="list-disc list-inside text-gray-600">
            {advert.features && advert.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Second Container (for description) */}
      <div className="bg-gray-200 shadow-md rounded-lg p-6 w-1/2 flex flex-col"> {/* Same color */}
        <h2 className="text-xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">{advert.description}</p> {/* Display advert description here */}
      </div>
    </div>
  );
};

export default AdvertDetail;
