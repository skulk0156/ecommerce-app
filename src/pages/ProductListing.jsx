import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Grid, List, X, ChevronDown } from 'lucide-react';
import { products, categories, searchProducts, getProductsByCategory } from '../data/products';
import { SORT_OPTIONS, PRICE_RANGES } from '../data/constants';
import { filterByPriceRange, sortArray } from '../utils/helpers';
import ProductCard from '../components/product/ProductCard';
import { Button, Badge, Card, Loading } from '../components/ui';

const ProductListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter and sort state
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

  // Simulate loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  // Update search query from URL params
  useEffect(() => {
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    
    if (search) setSearchQuery(search);
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Apply search filter
    if (searchQuery) {
      result = searchProducts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory && selectedCategory !== 'all') {
      result = getProductsByCategory(selectedCategory);
      if (searchQuery) {
        result = result.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    }

    // Apply price range filter
    if (selectedPriceRange !== 'all') {
      result = filterByPriceRange(result, selectedPriceRange);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        result = sortArray(result, 'price', 'asc');
        break;
      case 'price-high-low':
        result = sortArray(result, 'price', 'desc');
        break;
      case 'rating':
        result = sortArray(result, 'rating', 'desc');
        break;
      case 'newest':
        result = sortArray(result, 'id', 'desc');
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedPriceRange, sortBy]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRange('all');
    setSortBy('featured');
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRange !== 'all' || searchQuery;

  if (isLoading) {
    return <Loading fullPage text="Loading products..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {searchQuery ? `Search results for "${searchQuery}"` : 'All Products'}
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredAndSortedProducts.length} products
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <Card padding="lg" className="sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                    className="text-red-600 hover:text-red-700"
                  >
                    Clear All
                  </Button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Categories</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={selectedCategory === 'all'}
                      onChange={() => handleCategoryChange('all')}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">All Categories</span>
                  </label>
                  {categories.map((category) => (
                    <label key={category.id} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => handleCategoryChange(category.id)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Price Range</h4>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <label key={range.value} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        value={range.value}
                        checked={selectedPriceRange === range.value}
                        onChange={(e) => setSelectedPriceRange(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters and Sort */}
            <div className="lg:hidden mb-6 space-y-4">
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(true)}
                  className="flex-1 py-3 text-base font-medium"
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                  {hasActiveFilters && (
                    <Badge variant="danger" size="xs" className="ml-2">
                      Active
                    </Badge>
                  )}
                </Button>
                
                {/* Mobile Sort Button */}
                <div className="relative flex-1">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 pr-10 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Sort and View Controls */}
            <div className="hidden lg:flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              {/* Active Filters */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <Badge variant="primary" className="flex items-center text-sm py-1 px-3">
                      Search: {searchQuery}
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          const newParams = new URLSearchParams(searchParams);
                          newParams.delete('search');
                          setSearchParams(newParams);
                        }}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="primary" className="flex items-center text-sm py-1 px-3">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <button
                        onClick={() => handleCategoryChange('all')}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedPriceRange !== 'all' && (
                    <Badge variant="primary" className="flex items-center text-sm py-1 px-3">
                      {PRICE_RANGES.find(r => r.value === selectedPriceRange)?.label}
                      <button
                        onClick={() => setSelectedPriceRange('all')}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  )}
                </div>
              )}

              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* View Mode Toggle */}
                <div className="flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Active Filters */}
            {hasActiveFilters && (
              <div className="lg:hidden mb-4">
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <Badge variant="primary" className="flex items-center text-sm py-2 px-3">
                      Search: {searchQuery}
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          const newParams = new URLSearchParams(searchParams);
                          newParams.delete('search');
                          setSearchParams(newParams);
                        }}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="primary" className="flex items-center text-sm py-2 px-3">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <button
                        onClick={() => handleCategoryChange('all')}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </Badge>
                  )}
                  {selectedPriceRange !== 'all' && (
                    <Badge variant="primary" className="flex items-center text-sm py-2 px-3">
                      {PRICE_RANGES.find(r => r.value === selectedPriceRange)?.label}
                      <button
                        onClick={() => setSelectedPriceRange('all')}
                        className="ml-2 hover:text-white"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </Badge>
                  )}
                </div>
              </div>
            )}
            {filteredAndSortedProducts.length === 0 ? (
              <Card padding="lg" className="text-center">
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                  No products found matching your criteria.
                </p>
                <Button onClick={handleClearFilters} variant="primary">
                  Clear Filters
                </Button>
              </Card>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}>
                {filteredAndSortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className={viewMode === 'list' ? 'flex-row' : ''}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Filter Modal */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" 
              onClick={() => setShowFilters(false)} 
            />
            
            {/* Modal */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-800 shadow-xl overflow-y-auto transform transition-transform">
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={handleClearFilters}
                    className="mt-3 text-sm text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>

              <div className="px-6 py-4 space-y-8">
                {/* Mobile Categories */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-base">Categories</h4>
                  <div className="space-y-3">
                    <label className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <input
                        type="radio"
                        name="mobile-category"
                        value="all"
                        checked={selectedCategory === 'all'}
                        onChange={() => handleCategoryChange('all')}
                        className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-base text-gray-700 dark:text-gray-300 font-medium">All Categories</span>
                    </label>
                    {categories.map((category) => (
                      <label key={category.id} className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-category"
                          value={category.id}
                          checked={selectedCategory === category.id}
                          onChange={() => handleCategoryChange(category.id)}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="text-base text-gray-700 dark:text-gray-300 font-medium">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mobile Price Range */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-base">Price Range</h4>
                  <div className="space-y-3">
                    {PRICE_RANGES.map((range) => (
                      <label key={range.value} className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        <input
                          type="radio"
                          name="mobile-priceRange"
                          value={range.value}
                          checked={selectedPriceRange === range.value}
                          onChange={(e) => setSelectedPriceRange(e.target.value)}
                          className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <span className="text-base text-gray-700 dark:text-gray-300 font-medium">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    onClick={handleClearFilters}
                    className="flex-1 py-3 text-base font-medium"
                  >
                    Clear All
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => setShowFilters(false)}
                    className="flex-1 py-3 text-base font-medium"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;