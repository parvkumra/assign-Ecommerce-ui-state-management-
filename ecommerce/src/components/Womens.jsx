import React, { useContext } from 'react';
import ProductCard from './ProductCard'; 
import { CartContext } from '../context/CartContext'; 
const womenProducts = [
    {
      id: 1,
      name: 'Summer Dress',
      description: 'Light and airy summer dress.',
      price: '$49.99',
      sizes: ['S', 'M', 'L'],
      imageUrl: 'src/assets/dress.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Blouse',
      description: 'Elegant blouse for any occasion.',
      price: '$29.99',
      sizes: ['S', 'M', 'L', 'XL'],
      imageUrl: 'src/assets/bl.webp',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Jeans',
      description: 'Comfortable and stylish jeans.',
      price: '$59.99',
      sizes: ['S', 'M', 'L', 'XL'],
      imageUrl: 'src/assets/jeans.webp',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Skirt',
      description: 'Casual skirt perfect for summer.',
      price: '$34.99',
      sizes: ['S', 'M', 'L'],
      imageUrl: 'src/assets/download (1).jpeg',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Cardigan',
      description: 'Cozy cardigan for cooler days.',
      price: '$39.99',
      sizes: ['S', 'M', 'L', 'XL'],
      imageUrl: 'src/assets/cgan.jpeg',
      quantity: 1,
    },
    {
      id: 6,
      name: 'Blazer',
      description: 'Professional and stylish blazer.',
      price: '$79.99',
      sizes: ['S', 'M', 'L', 'XL'],
      imageUrl: 'src/assets/blazer.jpeg',
      quantity: 1,
    },
    {
      id: 7,
      name: 'Tank Top',
      description: 'Basic tank top for layering.',
      price: '$19.99',
      sizes: ['S', 'M', 'L'],
      imageUrl: 'src/assets/custom-womens-tanktop.webp',
      quantity: 1,
    },
    {
      id: 8,
      name: 'Leggings',
      description: 'Comfortable leggings for workouts.',
      price: '$29.99',
      sizes: ['S', 'M', 'L', 'XL'],
      imageUrl: 'src/assets/Unknown.jpeg',
      quantity: 1,
    },
  ];


const WomenWear = () => {
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        setCart([...cart, product]); 
    };

    return (
        <div id='shops' className="p-6 bg-gray-50">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Women's Wear</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
                {womenProducts.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default WomenWear;
