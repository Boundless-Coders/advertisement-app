import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { MoveLeft } from 'lucide-react';

const AdvertDetails = () => {
  const { id } = useParams();
  const [advert, setAdvert] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvert = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/adverts/${id}`);
        setAdvert(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAdvert();
  }, [id]);

  if (loading) return <div>Loading advert details...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
   <div >
     <div className="bg-white shadow-md rounded-lg p-4">
      <h1 className='text-xl font-semibold'>{advert.title}</h1>
      <img src={`https://savefiles.org/${advert.image}?shareable_link=439`} alt={advert.title} className="w-full h-48 object-cover mb-4 rounded"/>
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
              <Link to={`/dashboard`} className='pl-32 pt-5 text-lg text-green-700 hover:text-sky-700 '>
              <MoveLeft />
              </Link>

            </div>
    </div>
    
   </div>
  );
};

export default AdvertDetails;
