import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      <h1>{advert.title}</h1>
      <img src={`https://savefiles.org/${advert.image}?shareable_link=439`} alt={advert.title} />
      <p>{advert.description}</p>
      <p>Price: ${advert.price}</p>
      <p>Category: {advert.category}</p>
    </div>
  );
};

export default AdvertDetails;
