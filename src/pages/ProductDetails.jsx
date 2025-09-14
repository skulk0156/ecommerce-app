import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ArrowLeft, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { formatCurrency, calculateDiscountPercentage } from '../utils/helpers';
import { Button, Badge, Card } from '../components/ui';

const ProductDetails = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  const { addToCart } = useCart();
  const { showSuccess, showError } = useToast();

  const discountPercentage = product?.originalPrice && product.originalPrice > product.price 
    ? calculateDiscountPercentage(product.originalPrice, product.price) 
    : 0;

  const handleAddToCart = async () => {
    if (!product.inStock) {
      showError('Product is out of stock');
      return;
    }

    setIsAddingToCart(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      addToCart(product, quantity);
      showSuccess(`${product.name} added to cart!`);
    } catch (error) {
      showError('Failed to add product to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleWishlistToggle = () => {
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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Card padding="lg" className="text-center max-w-md mx-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products">
            <Button variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Header */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/products" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={handleWishlistToggle}
              className={`p-2 transition-colors ${
                isWishlisted 
                  ? 'text-red-500' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between mb-8">
          <Link to="/products" className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Products
          </Link>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Share2 className="w-5 h-5" />
            </button>
            <button 
              onClick={handleWishlistToggle}
              className={`p-2 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isWishlisted 
                  ? 'text-red-500' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white dark:bg-gray-800 rounded-lg lg:rounded-xl overflow-hidden shadow-lg">
              {discountPercentage > 0 && (
                <Badge 
                  variant="danger" 
                  className="absolute top-3 left-3 z-10 animate-pulse shadow-lg text-xs lg:text-sm"
                >
                  -{discountPercentage}% OFF
                </Badge>
              )}
              
              {!product.inStock && (
                <Badge 
                  variant="default" 
                  className="absolute top-3 right-3 z-10 bg-gray-600 text-white shadow-lg text-xs lg:text-sm"
                >
                  Out of Stock
                </Badge>
              )}
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Features Grid - Mobile optimized */}
            {product.features && product.features.length > 0 && (
              <div className="grid grid-cols-2 gap-2 lg:gap-4">
                {product.features.slice(0, 4).map((feature, index) => (
                  <Card key={index} padding="sm" className="text-center bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                    <p className="text-xs lg:text-sm text-blue-700 dark:text-blue-300 font-medium">
                      {feature}
                    </p>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            {/* Category Badge */}
            <div>
              <Badge variant="primary" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                {product.category}
              </Badge>
            </div>

            {/* Product Name */}
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                  {product.rating} ({product.reviews?.toLocaleString('en-IN')} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-lg lg:text-xl text-gray-500 line-through font-medium">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Quantity
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  -
                </button>
                <span className="text-xl lg:text-2xl font-medium text-gray-900 dark:text-white min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Stock Info */}
            {product.inStock && product.stock && product.stock < 10 && (
              <Card padding="sm" className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
                <p className="text-sm lg:text-base text-orange-600 dark:text-orange-400 font-medium text-center">
                  ⚡ Only {product.stock} left in stock!
                </p>
              </Card>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock || isAddingToCart}
                loading={isAddingToCart}
                fullWidth
                size="lg"
                variant="primary"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base lg:text-lg font-semibold py-3 lg:py-4"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {!product.inStock ? 'Out of Stock' : isAddingToCart ? 'Adding...' : `Add ${quantity} to Cart`}
              </Button>
              
              {/* Secondary Actions - Mobile optimized */}
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                <Card padding="sm" className="text-center bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <Truck className="w-4 h-4 lg:w-5 lg:h-5 text-green-600 dark:text-green-400 mx-auto mb-1" />
                  <p className="text-xs lg:text-sm text-green-700 dark:text-green-300 font-medium">
                    Free Delivery
                  </p>
                </Card>
                
                <Card padding="sm" className="text-center bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                  <p className="text-xs lg:text-sm text-blue-700 dark:text-blue-300 font-medium">
                    Secure Payment
                  </p>
                </Card>
                
                <Card padding="sm" className="text-center bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
                  <RotateCcw className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
                  <p className="text-xs lg:text-sm text-purple-700 dark:text-purple-300 font-medium">
                    Easy Returns
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features - Mobile optimized */}
        {product.features && product.features.length > 4 && (
          <Card padding="lg" className="mt-6 lg:mt-12">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm lg:text-base text-gray-700 dark:text-gray-300">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;