import React from 'react';
import AddToCart from './AddToCart';

const ProductCard = () => {
  return (
    <div className="w-160 p-4 border rounded shadow-md bg-sky-300 text-xl mb-4 hover:bg-sky-600">
      <h2 className="font-semibold text-lg mb-2">
        Product Name
        </h2>
      <p className="mb-1">
        Product description goes here.
      </p>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
