import heroImage from "../assets/images/bg2.avif";
import { useState, useEffect } from "react";
import RootLayout from "../layouts/RootLayout";
import { Grid, List } from 'lucide-react'; // Import Lucide icons for grid and list views
import { apiGetAdverts } from '../services/adverts'; // Adjust the import path to your api file
import { Link } from "react-router-dom";
import { Cable, Armchair, Shirt, Car } from "lucide-react";

const HomePage = () => {
  const [query, setQuery] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [isGridView, setIsGridView] = useState(true); // State to toggle between grid and list view
  const [items, setItems] = useState([]); // State to hold the adverts
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  // Fetch adverts on component mount
  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await apiGetAdverts();
        setItems(response.data); // Set the adverts data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchAdverts();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${query}, in category: ${category}`);
  };

  // if (loading) {
  //   return <div>Loading...</div>; // Display loading message
  // }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <RootLayout> 
      {/* Hero Section */}
      <div className="relative text-center mb-10">
        <div className="relative w-full h-screen">
          <img 
            src={heroImage} 
            alt="Hero Image" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="text-center mb-10">
            <h1 className="font-bold text-5xl mb-5">Largest Classifieds In The World</h1>
            <p className="text-2xl">You can buy, sell anything you want</p>
          </div>

          {/* Search Form Container */}
          <div className="max-w-4xl mx-auto bg-gray-100 bg-opacity-40 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  id="search"
                  name="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div className="w-full md:w-1/3">
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                  <option value="fashion">Fashion</option>
                  <option value="vehicles">Vehicles</option>
                </select>
              </div>
              <div className="w-full md:w-auto">
                <button
                  type="submit"
                  className="w-full px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Feature Section with Images */}
      
        <div className="flex justify-center items-center min-h-[490px] bg-transparent pt-0 p-6 rounded-lg -mt-64 relative">
          <div className="flex flex-wrap justify-center items-center gap-6 container md:gap-12">
            <div className="box  p-6 shadow-lg bg-slate-600 rounded-lg text-center">
              <span className="feature-icon w-12 h-12 mb-4 inline-flex justify-center items-center">
                <Cable/>
              </span>
              <h3 className="text-xl mb-2">Electronics</h3>
              <p className="text-gray-600 text-lg">20</p>
            </div>
            <div className="box p-6 shadow-lg bg-slate-600 rounded-lg text-center">
              <span className="feature-icon w-12 h-12 mb-4 inline-flex justify-center items-center">
                <Armchair/>
              </span>
              <h3 className="text-xl mb-2">Furniture</h3>
              <p className="text-white text-lg">10</p>
            </div>
            <div className="box bg-slate-600 p-6 shadow-lg rounded-lg text-center">
              <span className="feature-icon w-12 h-12 mb-4 inline-flex  justify-center items-center">
                < Shirt/>
              </span>
              <h3 className="text-xl mb-2">Fashion</h3>
              <p className="text-white text-lg">30</p>
            </div>
            <div className="box bg-slate-600 p-6 shadow-lg rounded-lg text-center">
              <span className="feature-icon w-12 h-12 mb-4 inline-flex  justify-center items-center">
                < Car/>
              </span>
              <h3 className="text-xl mb-2">Vehicles</h3>
              <p className="text-white text-lg">30</p>
            </div>
          </div>
        </div>

      {/* Toggle View Buttons for Grid/List */}
      <div className="flex justify-end my-6 gap-4 mx-8">
        <button
          onClick={() => setIsGridView(true)} // Set to grid view
          className={`p-2 rounded-full hover:bg-indigo-200 focus:outline-none ${isGridView ? 'bg-indigo-300' : 'bg-indigo-100'}`}
        >
          <Grid size={24} /> {/* Grid View Icon */}
        </button>
        <button
          onClick={() => setIsGridView(false)} // Set to list view
          className={`p-2 rounded-full hover:bg-indigo-200 focus:outline-none ${!isGridView ? 'bg-indigo-300' : 'bg-indigo-100'}`}
        >
          <List size={24} /> {/* List View Icon */}
        </button>
      </div>

      {/* Items Section */}
      <div className={`grid ${isGridView ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1'} gap-2`}>
        {items.map((item) => (
          <div key={item.id} className="mb-16">
            <div className="flex-col rounded-md bg-gray-200 flex flex-wrap gap-2 p-4 justify-center items-center mt-6 mx-10">
              {/* Include the image URL here */}
              <img 
                src={`https://savefiles.org/${item.image}?shareable_link=439`} 
                alt={item.title} 
                className="w-60 h-60 rounded-lg object-cover mb-2" 
              />
              <p className="text-xl font-bold">{item.title}</p>
              <p className="text-base font-medium">Price: GHC {item.price}</p>
              <Link to={`/adverts/${item.id}`} className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
};

export default HomePage;
