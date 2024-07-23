import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard'; // Ensure correct path to ProductCard component

const womenProducts = [
  {
    id: 1,
    name: 'Summer Dress',
    description: 'Light and airy summer dress.',
    price: '$49.99',
    sizes: ['S', 'M', 'L'],
    imageUrl: '../../assets/dress.jpg',
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

const kproducts = [
  {
    id: 101,
    name: 'T-Shirt',
    description: 'Comfortable cotton t-shirt for kids.',
    price: '$15.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantity: 1,
    imageUrl: 'src/assets/download.jpeg',
  },
  {
    id: 102,
    name: 'Jeans',
    description: 'Stylish denim jeans for kids.',
    price: '$29.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantity: 1,
    imageUrl: 'src/assets/jeans.webp',
  },
  {
    id: 103,
    name: 'Hoodie',
    description: 'Warm and cozy hoodie for cooler days.',
    price: '$25.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantity: 1,
    imageUrl: 'src/assets/hoodie.jpg',
  },
  {
    id: 104,
    name: 'Dress',
    description: 'Cute floral dress for little girls.',
    price: '$19.99',
    sizes: ['XS', 'S', 'M', 'L'],
    quantity: 1,
    imageUrl: 'src/assets/dress.jpg',
  },
  {
    id: 105,
    name: 'Shorts',
    description: 'Comfortable shorts perfect for summer.',
    price: '$14.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantity: 1,
    imageUrl: 'src/assets/shorts.jpg',
  },
  {
    id: 106,
    name: 'Sweater',
    description: 'Soft sweater for layering on chilly days.',
    price: '$22.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantity: 1,
    imageUrl: 'src/assets/sweater.avif',
  },
  {
    id: 107,
    name: 'Jacket',
    description: 'Stylish jacket with hood for kids.',
    price: '$35.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantity: 1,
    imageUrl: 'src/assets/jacket.jpg',
  },
  {
    id: 108,
    name: 'Skirt',
    description: 'Flirty skirt perfect for a sunny day.',
    price: '$18.99',
    sizes: ['XS', 'S', 'M', 'L'],
    quantity: 1,
    imageUrl: 'src/assets/download (1).jpeg',
  },
  {
    id: 109,
    name: 'Leggings',
    description: 'Comfortable and stretchy leggings.',
    price: '$12.99',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    quantity: 1,
    imageUrl: 'src/assets/Unknown.jpeg',
  },
  {
    id: 110,
    name: 'Cap',
    description: 'Cute cap to keep the sun off.',
    price: '$9.99',
    sizes: ['One Size'],
    quantity: 1,
    imageUrl: 'src/assets/61mV+rBgRjL._AC_UY1100_.jpg',
  },
];

function Product() {
  const { id } = useParams(); 
  const isKidsProduct = parseInt(id) > 100; 

  const [currentType, setCurrentType] = useState(isKidsProduct ? 'kids' : 'women'); 
  const products = currentType === 'women' ? womenProducts : kproducts;

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }



  // Function to render related items based on the current product type
  const renderRelatedItems = () => {
    const relatedProducts = currentType === 'women' ? womenProducts : kproducts;
    const filteredProducts = relatedProducts.filter(p => p.id !== parseInt(id)).slice(0, 3); // Display up to 3 related items

    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Related Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <center>
          <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover mb-4 rounded" />
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-gray-800 font-bold mt-2">{product.price}</p>
          <p className="text-gray-600 mt-2">Sizes: {product.sizes.join(', ')}</p>
          
        </center>
      </div>

      {/* Display related items section */}
      {renderRelatedItems()}
    </div>
  );
}

export default Product;