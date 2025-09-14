import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { formatCurrency, calculateDiscountPercentage } from '../../utils/helpers';
import { Button, Badge, Card } from '../ui';

const ProductCard = ({ product, className = '' }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const { addToCart } = useCart();
  const { showSuccess, showError } = useToast();

  const discountPercentage = product.originalPrice && product.originalPrice > product.price 
    ? calculateDiscountPercentage(product.originalPrice, product.price) 
    : 0;

  const handleAddToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!product.inStock) {
      showError('Product is out of stock');
      return;
    }

    setIsAddingToCart(true);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      addToCart(product, 1);
      showSuccess(`${product.name} added to cart!`);
    } catch (error) {
      showError('Failed to add product to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    showSuccess(
      isWishlisted 
        ? 'Removed from wishlist' 
        : `${product.name} added to wishlist!`
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-4 h-4 text-yellow-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <Card 
      className={`group relative overflow-hidden card-hover transition-all duration-500 animate-fadeInScale ${className}`}
      padding="none"
    >
      <Link to={`/products/${product.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
          {/* Discount Badge with animation */}
          {discountPercentage > 0 && (
            <Badge 
              variant="danger" 
              className="absolute top-3 left-3 z-10 animate-pulse shadow-lg"
            >
              -{discountPercentage}% OFF
            </Badge>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <Badge 
              variant="default" 
              className="absolute top-3 right-3 z-10 bg-gray-600 text-white shadow-lg"
            >
              Out of Stock
            </Badge>
          )}

          {/* Product Image with enhanced loading */}
          <div className="relative w-full h-full">
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 shimmer">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsImageLoading(false)}
              onError={() => setIsImageLoading(false)}
            />
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Overlay Actions with enhanced animations */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500">
            <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 transform translate-x-4 group-hover:translate-x-0">
              {/* Wishlist Button */}
              <button
                onClick={handleWishlistToggle}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm ${
                  isWishlisted 
                    ? 'bg-red-500 text-white animate-pulse-glow' 
                    : 'bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''} transition-all duration-300`} />
              </button>

              {/* Quick View Button */}
              <button
                className="p-3 bg-white/90 text-gray-600 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg backdrop-blur-sm"
                aria-label="Quick view"
              >
                <Eye className="w-5 h-5 transition-all duration-300" />
              </button>
            </div>

            {/* Quick Add to Cart - enhanced with better animations */}
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAddingToCart}
                loading={isAddingToCart}
                fullWidth
                variant="primary"
                className="shadow-elegant btn-hover-lift backdrop-blur-sm bg-blue-600/95 hover:bg-blue-700 border-0"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {!product.inStock ? 'Out of Stock' : isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>

        {/* Product Info with enhanced styling */}
        <div className="p-5 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
          {/* Category with gradient */}
          <div className="mb-3">
            <Badge variant="primary" size="xs" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
              {product.category}
            </Badge>
          </div>

          {/* Product Name with gradient text on hover */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:gradient-text transition-all duration-300">
            {product.name}
          </h3>

          {/* Rating with enhanced stars */}
          {product.rating && (
            <div className="flex items-center space-x-2 mb-3">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                ({product.reviews?.toLocaleString('en-IN')})
              </span>
            </div>
          )}

          {/* Price with enhanced formatting */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through font-medium">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Add to Cart Button - mobile with enhanced styling */}
          <div className="md:hidden">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAddingToCart}
              loading={isAddingToCart}
              fullWidth
              variant="primary"
              className="btn-hover-lift bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-elegant"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {!product.inStock ? 'Out of Stock' : isAddingToCart ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>

          {/* Stock Info with enhanced styling */}
          {product.inStock && product.stock && product.stock < 10 && (
            <div className="mt-3 p-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <p className="text-sm text-orange-600 dark:text-orange-400 font-medium text-center">
                ⚡ Only {product.stock} left in stock!
              </p>
            </div>
          )}
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;