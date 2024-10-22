
import heroImage from "../assets/images/hero.jpg"
import pic from "../assets/images/xiaomi-mobiles.jpg";
import { useState } from "react";
import RootLayout from "../layouts/RootLayout";
import brown from "../assets/images/brown.jpg";
import shirt from "../assets/images/shirt.jpg";
import fur from "../assets/images/fur.jpg";
import dress from "../assets/images/dress.jpg";
import car from "../assets/images/benz.jpg";
import phone from "../assets/images/vivo.jpg";
import laptop from "../assets/images/lapi.webp"


const HomePage = () => {
  const [query, setQuery] = useState(""); 
  const [category, setCategory] = useState(""); 

  const handleSearch = (event) => {
    event.preventDefault();
    
    console.log(`Searching for: ${query}, in category: ${category}`);
  };

  return (
    <RootLayout > 
      {/* Hero Section */}
      <div className="">
        <div className="relative text-center mb-10">
          {/* Hero Image */}
          <img 
            src={heroImage} 
            alt="Hero Image" 
            className="w-full h-96 object-cover rounded-lg shadow-md" 
          />
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

      {/* Feature Section with Images */}
      <div className="inline-flex bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex justify-center items-center gap-x-6">
          
          {/* Electronics Box */}
          <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
            <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
              <img src="" alt="Electronics" className="w-12 h-12 object-cover rounded-lg"/>
            </span>
            <h3 className="text-xl font-bold mb-2">Electronics</h3>
            <p className="text-gray-600 text-lg">20</p>
          </div>

          {/* Furniture Box */}
          <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
            <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
              <img src="/path-to-your-image/furniture.jpg" alt="Furniture" className="w-12 h-12 object-cover rounded-lg"/>
            </span>
            <h3 className="text-xl font-bold mb-2">Furniture</h3>
            <p className="text-gray-600 text-lg">10</p>
          </div>

          {/* Fashion Box */}
          <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
            <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
              <img src="/path-to-your-image/fashion.jpg" alt="Fashion" className="w-12 h-12 object-cover rounded-lg"/>
            </span>
            <h3 className="text-xl font-bold mb-2">Fashion</h3>
            <p className="text-gray-600 text-lg">30</p>
          </div>

          {/* Vehicles Box */}
          <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
            <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
              <img src="/path-to-your-image/vehicles.jpg" alt="Vehicles" className="w-12 h-12 object-cover rounded-lg"/>
            </span>
            <h3 className="text-xl font-bold mb-2">Vehicles</h3>
            <p className="text-gray-600 text-lg">30</p>
          </div>
        </div>
      </div>

      
      <div >
        <div className=" flex flex-wrap gap-6 p-4 justify-center items-center gap-x-8 mt-6">
          
          
          <div>
            <img src={pic} alt="Item 1" className="w-60 h-60  rounded-lg"/> 
            <p className="text-xl font-bold mb-2">Item 1</p>
            </div>
         
          
          <div >
            <img src={brown} alt="Item 2" className="w-60 h-60  rounded-lg"/>
            <p className="text-xl font-bold mb-2">Item 2</p>
          </div>

         
          <div >
            <img src={shirt} alt="Item 3" className="w-60 h-60 rounded-lg"/>
            <p className="text-xl font-bold mb-2">Item 3</p>
          </div>

          
          <div>
            <img src={fur} alt="Item 4" className="w-60 h-60 rounded-lg"/>
            <p className="text-xl font-bold mb-2">Item 4</p>
            </div>

          <div>
            <img src={dress} alt="Item 5" className="w-60 h-60 rounded-lg"/>
            <p className="text-xl font-bold mb-2">Item 5</p>
            </div>
            
          <div>
            <img src={car} alt="Item 6" className="w-60 h-60 rounded-lg"/>
            <p className="text-xl font-bold mb-2">Item 6</p>
            </div>

          <div>
            <img src={phone} alt="Item 7" className="w-60 h-60 rounded-lg"/>
            <p className="text-xl font-bold mb-2">Item 7</p>
            </div>

          <div>
            <img src={laptop} alt="Item 8" className="w-60 h-60 rounded-lg"/>
            <p className="text-xl font-bold mb-2">Item 8</p>
            </div>

        </div>
      </div>
      </div>
      </div>
    </RootLayout>
  );
};

export default HomePage;
