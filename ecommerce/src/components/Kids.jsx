import React, { useContext } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard'; // Assuming ProductCard is in the same directory

const products = [
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
const Kids = () => {
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        setCart([...cart, product]); // Add product to cart
    };

    return (
        <div id="kidsSection" className="flex flex-col items-center my-8">
            <h1 className="text-3xl font-bold mb-8 p-3 font-serif">NEW COLLECTION</h1>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
                className="w-full md:w-3/4 lg:w-1/2"
            >
                {products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </Carousel>
        </div>
    );
};

export default Kids;
