import heroImage from "../assets/images/bg2.avif";
import pic from "../assets/images/xiaomi-mobiles.jpg";
import { useState } from "react";
import RootLayout from "../layouts/RootLayout";
import brown from "../assets/images/brown.jpg";
import shirt from "../assets/images/shirt.jpg";
import fur from "../assets/images/fur.jpg";
import dress from "../assets/images/dress.jpg";
import car from "../assets/images/benz.jpg";
import phone from "../assets/images/vivo.jpg";
import laptop from "../assets/images/lapi.webp";
import { Grid, List } from 'lucide-react'; // Import Lucide icons for grid and list views

const HomePage = () => {
  const [query, setQuery] = useState(""); 
  const [category, setCategory] = useState(""); 
  const [isGridView, setIsGridView] = useState(true); // State to toggle between grid and list view

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${query}, in category: ${category}`);
  };

  // Items data (you can replace this with your own data)
  const items = [
    { id: 1, imgSrc: pic, title: "Mobile phone", price: "GHC 3000"},
    { id: 2, imgSrc: brown, title: "Bag ", price: "GHC 350" },
    { id: 3, imgSrc: shirt, title: "Shirt", price: "GHC 150" },
    { id: 4, imgSrc: fur, title: "Kitchen set", price: "GHC 4000" },
    { id: 5, imgSrc: dress, title: "Dress", price: "GHC 180" },
    { id: 6, imgSrc: car, title: "Benz", price: "GHC " },
    { id: 7, imgSrc: phone, title: "Smartphone", price: "GHC 2500" },
    { id: 8, imgSrc: laptop, title: "Laptop", price: "GHC 5000" },
  ];

  return (
    <RootLayout> 
      {/* Hero Section */}
      <div className="relative text-center mb-10">
        {/* Hero Image */}
        <div className="relative w-full h-screen ">
          <img 
            src={heroImage} 
            alt="Hero Image" 
            className=" w-full h-full object-cover" 
          />
        </div>

        {/* Hero Content: Title, Subtitle, and Search Form */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="">
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
      </div>

      {/* Feature Section with Images */}
      <div className="flex justify-center items-center min-h-[250px]">
  <div className="inline-flex bg-gray-100 p-6 rounded-lg shadow-md -mt-64 relative">
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
      {/* Example boxes for features */}
 
      <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
        <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
          <img src="/placeholder.svg?height=48&width=48" alt="Electronics" className="w-12 h-12 object-cover rounded-lg"/>
        </span>
        <h3 className="text-xl font-bold mb-2">Electronics</h3>
        <p className="text-gray-600 text-lg">20</p>
      </div>

      <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
        <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
          <img src="/placeholder.svg?height=48&width=48" alt="Furniture" className="w-12 h-12 object-cover rounded-lg"/>
        </span>
        <h3 className="text-xl font-bold mb-2">Furniture</h3>
        <p className="text-gray-600 text-lg">10</p>
      </div>

      <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
        <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
          <img src="/placeholder.svg?height=48&width=48" alt="Fashion" className="w-12 h-12 object-cover rounded-lg"/>
        </span>
        <h3 className="text-xl font-bold mb-2">Fashion</h3>
        <p className="text-gray-600 text-lg">30</p>
      </div>

      <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
        <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
          <img src="/placeholder.svg?height=48&width=48" alt="Vehicles" className="w-12 h-12 object-cover rounded-lg"/>
        </span>
        <h3 className="text-xl font-bold mb-2">Vehicles</h3>
        <p className="text-gray-600 text-lg">30</p>
      </div>
    </div>
  </div>
</div>
      {/* Toggle View Buttons for Grid/List */}
      <div className="flex justify-end my-6 gap-4  mx-8">
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
      <div className= {`grid ${isGridView ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1'} gap-2`}>
        {items.map((item) => (
          <div className="mb-16 ">
            <div key={item.id} className=" flex-col rounded-md bg-gray-200 flex flex-wrap gap-2 p-4 justify-center items-center  mt-6 mx-10">
            <img src={item.imgSrc} alt={item.title} className="w-60 h-60  rounded-lg object-cover  mb-2" />
            <p className="text-xl font-bold ">{item.title}</p>
            <p className="text-base font-medium">{item.price}</p>
          </div>
          </div>
        ))}
      </div>
    </RootLayout>
  );
};

export default HomePage;
