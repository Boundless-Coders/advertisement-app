import React from 'react';

const Features = () => {
  return (
    <div className="big-container inline-flex bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex justify-center items-center gap-x-6">
        <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
          <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
            {/* Insert your icon here */}
            
          </span>
          <h3 className="text-xl font-bold mb-2">Electronics</h3>
          <p className="text-gray-600 text-lg">20</p>
        </div>
        <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
          <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
            {/* Insert your icon here */}
            
          </span>
          <h3 className="text-xl font-bold mb-2">Furniture</h3>
          <p className="text-gray-600 text-lg">10</p>
        </div>
        <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
          <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
            {/* Insert your icon here */}
            
          </span>
          <h3 className="text-xl font-bold mb-2">Fashion</h3>
          <p className="text-gray-600 text-lg">30</p>
        </div>
        <div className="box bg-white p-6 shadow-lg rounded-lg text-center">
          <span className="feature-icon w-12 h-12 mb-4 inline-flex bg-gray-200 justify-center items-center">
            {/* Insert your icon here */}
            
          </span>
          <h3 className="text-xl font-bold mb-2">Vehicles</h3>
          <p className="text-gray-600 text-lg">30</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
