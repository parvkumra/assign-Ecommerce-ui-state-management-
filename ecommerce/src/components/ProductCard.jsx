import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    const [added, setAdded] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setAdded(true);
        onAddToCart(product); // Call parent callback to add product to cart
    };

    const handleNavigate = () => {
        navigate(`/product/${product.id}`);
        window.scrollTo(0, 0);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4" onClick={handleNavigate}>
            <img src={product.imageUrl} alt={product.name} className="w-full h-60 object-contain mb-4 rounded" />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <p className="text-gray-800 font-bold mt-2">{product.price}</p>
            <p className="text-gray-600 mt-2">Sizes: {product.sizes.join(', ')}</p>
            <button
                onClick={(e) => {
                    e.stopPropagation(); // Prevent click event from triggering on parent div
                    handleClick();
                }}
                className={`py-2 px-6 rounded mt-4 ${added ? 'bg-green-500' : 'bg-blue-500'} text-white hover:bg-blue-600 transition`}
            >
                {added ? 'Added' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductCard;
