import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import { featuredProducts, categories } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import { Button, Card } from '../components/ui';

const Home = () => {
  return (
    <div className="min-h-screen page-transition">
      {/* Hero Section with enhanced gradients */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-40 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                India's Favorite
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Shopping Destination
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Shop from millions of products with best prices, fast delivery across India. 
                From electronics to fashion - everything you need.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/products">
                  <Button size="lg" variant="primary" className="btn-hover-lift bg-white text-blue-600 hover:bg-gray-100 border-0 shadow-elegant-lg">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Shop Now
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white hover:text-blue-600 border-2 backdrop-blur-sm">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-slideInFromRight">
              <div className="relative float">
                <img
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=600&fit=crop"
                  alt="Shopping"
                  className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-black p-6 rounded-2xl font-bold shadow-elegant-lg animate-pulse-glow">
                  <p className="text-sm">Free Delivery</p>
                  <p className="text-xl">On Orders ₹500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with enhanced design */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Why Choose IndiaKart?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the best of online shopping with our premium services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <Truck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Free delivery on orders above ₹500. Fastest delivery across India.</p>
            </div>
            <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <Shield className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Secure Payment</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">100% secure payments with UPI, cards, net banking & COD options.</p>
            </div>
            <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
                <HeadphonesIcon className="w-10 h-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Round-the-clock customer support to help you anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section with enhanced animations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our wide range of categories and find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="group animate-fadeInScale"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <Card className="text-center card-hover border-0 shadow-elegant overflow-hidden" padding="lg">
                  <div className="aspect-square mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section with enhanced styling */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Check out our handpicked selection of the best products just for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fadeInScale"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fadeInUp">
            <Link to="/products">
              <Button size="lg" variant="primary" className="btn-hover-lift shadow-elegant-lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section with glassmorphism */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter and be the first to know about new products, 
              exclusive deals, and special offers.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none backdrop-blur-sm bg-white/20 text-white placeholder-white/70 shadow-elegant"
              />
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 btn-hover-lift border-0 shadow-elegant">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-blue-200">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section with enhanced animations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3">1Cr+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Customers</div>
            </div>
            <div className="animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-3">10L+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Products</div>
            </div>
            <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent mb-3">500+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Cities Served</div>
            </div>
            <div className="animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent mb-3">24/7</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;