import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">{product.price} ₽</span>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center space-x-1 bg-rose-500 text-white px-3 py-2 rounded-md hover:bg-rose-600 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
}