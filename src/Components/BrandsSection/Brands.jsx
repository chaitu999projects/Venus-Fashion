// Brands.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../ProductData/ProductData';

const Brands = () => {
  const brands = Object.keys(ProductData); // Gets ['adidas', 'asos', 'mango', 'topshop']

  return (
    <div className="brands-container">
      <h1>Shop by Brand</h1>
      <div className="brands-grid">
        {brands.map((brand) => (
          <Link 
            key={brand} 
            to={`/brand/${brand}`}
            className="brand-card"
          >
            <h2>{brand.toUpperCase()}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;