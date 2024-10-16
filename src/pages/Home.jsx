import React, { useState } from "react";
import RootLayout from "../layouts/RootLayout";

const Home = () => {
  const [query, setQuery] = useState(""); 
  const [category, setCategory] = useState(""); 

  const handleSearch = (event) => {
    event.preventDefault();
    
    console.log(`Searching for: ${query}, in category: ${category}`);
  };

  return (
    <RootLayout>
      <div className="container mx-auto py-10">
        <div className="text-center mb-10">
          <h1 className="font-bold text-5xl mb-5">Largest Classifieds In The World</h1>
          <p className="text-2xl">You can buy, sell anything you want</p>
        </div>

        {/* Search Form Container  */}
        <div className="max-w-4xl mx-auto bg-gray-100 p-8 rounded-lg shadow-lg">
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
    </RootLayout>
  );
};

export default Home;
