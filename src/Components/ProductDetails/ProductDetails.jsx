import React from 'react';
import ProductData from '../ProductData/ProductData';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const { id, brand } = useParams();
    const navigate = useNavigate();
    
    // Find the product in the nested structure
    const brandProducts = ProductData[brand];
    const product = brandProducts?.find(prod => prod.id === parseInt(id));

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product not found</h2>
                <button onClick={() => navigate('/')}>Return to Home</button>
            </div>
        );
    }

    return (
        <div className="product-detail-container">
            <img src={product.url} alt={product.description} />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {/* Add quantity controls and add to cart button if needed */}
        </div>
    );
}

export default ProductDetails;