import React from 'react';

const ProductSkeletonLoader = () => {
  // Create an array of 6 items to represent 2 rows of products
  const skeletonItems = Array(6).fill(0);
  
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Page header skeleton */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded-md w-64 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-md w-full max-w-2xl"></div>
      </div>
      
      {/* Filters skeleton */}
      <div className="flex gap-4 mb-6">
        <div className="h-10 bg-gray-200 rounded-md w-32"></div>
        <div className="h-10 bg-gray-200 rounded-md w-32"></div>
        <div className="h-10 bg-gray-200 rounded-md w-32"></div>
      </div>
      
      {/* Products grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skeletonItems.map((_, index) => (
          <div key={index} className="rounded-lg shadow-sm overflow-hidden bg-white">
            {/* Product image skeleton */}
            <div className="w-full h-48 bg-gray-200"></div>
            
            {/* Product content skeleton */}
            <div className="p-4">
              {/* Title */}
              <div className="h-5 bg-gray-200 rounded-md w-3/4 mb-3"></div>
              
              {/* Price */}
              <div className="h-6 bg-gray-200 rounded-md w-1/4 mb-3"></div>
              
              {/* Description lines */}
              <div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded-md w-5/6 mb-2"></div>
              
              {/* Button placeholder */}
              <div className="h-10 bg-gray-200 rounded-md w-full mt-4"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination skeleton */}
      <div className="mt-8 flex justify-center">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div key={index} className="w-10 h-10 bg-gray-200 rounded-md"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSkeletonLoader;