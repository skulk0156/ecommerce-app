import React from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatCurrency } from '../../utils/helpers';
import { Button } from '../ui';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemsCount,
    clearCart
  } = useCart();

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleOverlayClick}
      />
      
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-800 shadow-xl transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            <ShoppingBag className="w-5 h-5 mr-2" />
            Cart ({getCartItemsCount()})
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Add some products to get started!
              </p>
              <Link to="/products">
                <Button
                  variant="primary"
                  onClick={() => setIsCartOpen(false)}
                >
                  Start Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/products/${item.id}`}
                      onClick={() => setIsCartOpen(false)}
                      className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatCurrency(item.price)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                      </button>
                      <span className="text-sm font-medium text-gray-900 dark:text-white min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-500 transition-colors"
                      >
                        <Plus className="w-3 h-3 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors p-1"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Clear Cart Button */}
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors py-2"
                >
                  Clear all items
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between text-lg font-semibold text-gray-900 dark:text-white">
              <span>Subtotal:</span>
              <span>{formatCurrency(getCartTotal())}</span>
            </div>

            {/* Shipping Info */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Shipping and taxes calculated at checkout.
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link to="/cart" className="block">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => setIsCartOpen(false)}
                >
                  View Cart
                </Button>
              </Link>
              <Link to="/checkout" className="block">
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => setIsCartOpen(false)}
                >
                  Checkout
                </Button>
              </Link>
            </div>

            {/* Free Shipping Progress */}
            {getCartTotal() < 500 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Add {formatCurrency(500 - getCartTotal())} for free delivery
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((getCartTotal() / 500) * 100, 100)}%` }}
                  />
                </div>
              </div>
            )}

            {getCartTotal() >= 500 && (
              <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                <span className="mr-2">🎉</span>
                <span>You qualify for free delivery!</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;