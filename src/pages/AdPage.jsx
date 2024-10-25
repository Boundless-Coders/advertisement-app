import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Grid, List } from 'lucide-react'; // Import Lucide icons for grid and list views
import Navbar from '../components/Navbar';

const AdPage = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://ads-app-backend-1.onrender.com/adverts'); // Adjust API URL as necessary
        setItems(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='bg-blue-100'>
    <div>
        {/* Navbar */}
      <nav className='flex justify-between items-center bg-slate-100 h-20 right-32 left-32 mt-4 z-50 rounded-md absolute'>
      <div className='logo'>
        <h1 className='text-lg font-bold m-3 ml-8'>CLASSYADS</h1>
      </div>

      <ul className='list-none p-0 flex gap-8 font-serif'>
        <li>
          <Link to="/" className='no-underline text-black'>Home</Link>
        </li>
        <li>
          <Link to="/adpage" className='no-underline text-black'>Ads</Link> {/* Updated to point to AdPage */}
        </li>
        <li>
          <Link to="/about" className='no-underline text-black'>About</Link>
        </li>
        <li>
          <Link to="/footer" className='no-underline text-black'>Contact</Link>
        </li>
      </ul>

      <div className='flex gap-4'>
        <button>
          <Link to="/vendor" className='no-underline px-4 mr-8 ml-7 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg'>
            +Post Ad
          </Link>
        </button>
      </div>
    </nav>
    </div>
    <div className="container mx-auto pt-44 p-4">

      {/* Hero Section */}
      {/* <div className="relative w-full h-48 mt-4">
        <img 
          src={heroImage} 
          alt="Hero Image" 
          className="w-full h-full object-cover" 
        />
      </div> */}

      {/* Search Bar */}
      <div className="mt-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an ad..."
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Toggle View Buttons for Grid/List */}
      <div className="flex justify-end my-4 gap-4">
        <button
          onClick={() => setIsGridView(true)}
          className={`p-2 rounded-full hover:bg-indigo-200 focus:outline-none ${isGridView ? 'bg-indig-300' : 'bg-indigo-100'}`}
        >
          <Grid size={24} />
        </button>
        <button
          onClick={() => setIsGridView(false)}
          className={`p-2 rounded-full hover:bg-indigo-200 focus:outline-none ${!isGridView ? 'bg-indigo-300' : 'bg-indigo-100'}`}
        >
          <List size={24} />
        </button>
      </div>

      {/* Items Section */}
      <div className={`grid ${isGridView ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1'} gap-4 bg-white`}>
        {filteredItems.map(item => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <img 
              src={`https://savefiles.org/${item.image}?shareable_link=439`} 
              alt={item.title} 
              className="w-full h-40 object-cover mb-2" 
            />
            <h2 className="font-bold">{item.title}</h2>
            <p className="text-gray-600">Price: GHC {item.price}</p>
            <Link to={`/adverts/${item.id}`} className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AdPage;
