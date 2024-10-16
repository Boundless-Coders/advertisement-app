import React, { useState } from 'react';

const VendorForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  // Define categories and their corresponding sub-categories
  const categories = {
    electronics: ['Mobile Phones', 'Laptops'],
    furniture: ['Tables', 'Sofas'],
    fashion: ['Bags', 'Clothing'],
    toys: ['Educational', 'Outdoor', 'Indoor'],
    vehicles: ['Fiction', 'Non-Fiction', 'Textbooks'],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create form data to handle image upload
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('subCategory', subCategory);

    // Add your submission logic here (e.g., API call)
    console.log('Form Data:', formData);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory(''); // Reset sub-category when category changes
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Post an Advert</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <select
              value={category}
              onChange={handleCategoryChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="fashion">Fashion</option>
              <option value="vehicles">Vehicles</option>
            </select>
          </div>
          {category && (
            <div className="mb-4">
              <label className="block text-gray-700">Sub-Category:</label>
              <select
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
                required
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a sub-category</option>
                {categories[category].map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Post Advert
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorForm;
