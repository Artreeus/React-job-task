import React, { useState } from 'react';
import { smartWatch } from '../data/product.ts';
import CartModal from './CartModal.tsx';

export default function SmartWatchShop() {
  const [selectedColor, setSelectedColor] = useState(smartWatch.colors[0]);
  const [selectedSize, setSelectedSize] = useState(smartWatch.sizes[1]);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState<Array<{ color: string; size: string; quantity: number; price: number }>>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = () => {
    if (quantity > 0) {
      setCart([...cart, { 
        color: selectedColor.name, 
        size: selectedSize.label, 
        quantity, 
        price: selectedSize.price 
      }]);
      setQuantity(0);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto ">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-xl ">
            <img
              src={selectedColor.image}
              alt={smartWatch.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{smartWatch.name}</h1>
              <div className="mt-2 flex items-center gap-2">
                {[1, 2, 3, 4].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm text-gray-500">({smartWatch.reviews} Reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-gray-500 line-through">${smartWatch.originalPrice.toFixed(2)}</span>
              <span className="text-2xl font-bold text-purple-600">${smartWatch.price.toFixed(2)}</span>
            </div>

            <p className="text-gray-600">{smartWatch.description}</p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-500">Type</span>
                <p className="font-medium">{smartWatch.type}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Model Number</span>
                <p className="font-medium">{smartWatch.modelNumber}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Band Color</h3>
              <div className="mt-2 flex gap-2">
                {smartWatch.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`h-8 w-8 rounded-full border-2 ${
                      selectedColor.name === color.name ? 'border-purple-600' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Wrist Size</h3>
              <div className="mt-2 flex gap-2">
                {smartWatch.sizes.map((size) => (
                  <button
                    key={size.label}
                    className={`px-4 py-2 rounded border text-sm ${
                      selectedSize.label === size.label 
                        ? 'border-purple-600 bg-purple-50 text-purple-600' 
                        : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.label} ${size.price}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded border">
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(0, quantity - 1))}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  className="p-2 hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
              <button
                onClick={addToCart}
                disabled={quantity === 0}
                className={`flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded ${
                  quantity === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                Add to Cart
              </button>
              <button className="p-2 border rounded hover:bg-gray-100">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-orange-100 hover:bg-orange-200 border border-orange-200 text-gray-800 py-2 px-4 rounded"
        >
          Checkout ({totalItems})
        </button>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        product={smartWatch}
      />
    </div>
  );
}

