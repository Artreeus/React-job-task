import React from 'react';
import { Product } from '../types/product';

interface CartItem {
  color: string;
  size: string;
  quantity: number;
  price: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  product: Product;
}

export default function CartModal({ isOpen, onClose, items, product }: CartModalProps) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Cart</h2>
        <div className="w-full">
          <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-4 pb-2 border-b text-gray-600">
            <div>Item</div>
            <div>Color</div>
            <div>Size</div>
            <div>Qnt</div>
            <div className="text-right">Price</div>
          </div>
          
          <div className="divide-y">
            {items.map((item, index) => (
              <div key={index} className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-4 py-4 items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={product.colors.find(c => c.name === item.color)?.image || ''}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <span className="font-medium">{product.name}</span>
                </div>
                <div>{item.color}</div>
                <div>{item.size}</div>
                <div>{item.quantity}</div>
                <div className="text-right">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          
          <div className="border-t mt-4 pt-4">
            <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] gap-4 font-semibold">
              <div>Total</div>
              <div></div>
              <div></div>
              <div>{totalItems}</div>
              <div className="text-right">${totalPrice.toFixed(2)}</div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end gap-4">
            <button 
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Continue Shopping
            </button>
            <button 
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

