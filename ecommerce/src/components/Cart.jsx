import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, delta) => {
    const item = cart.find(product => product.id === id);
    if (item) {
      const newQuantity = Math.max(item.quantity + delta, 1); 
      updateQuantity(id, newQuantity);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price.replace('$', '')) * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <div className="flex items-center">
                <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover rounded mr-4" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <p className="text-gray-800 font-bold mt-2">{product.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={product.quantity}
                      readOnly
                      className="w-12 text-center border-t border-b"
                    />
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="bg-gray-300 text-gray-700 py-1 px-2 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="text-right mt-6">
            <h2 className="text-2xl font-bold text-gray-900">Total: ${getTotalPrice()}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;