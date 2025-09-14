import React from 'react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <div className={`inline-block ${sizes[size]} ${className}`}>
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full border-2 border-blue-200 dark:border-blue-800"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 dark:border-t-blue-400 animate-spin"></div>
      </div>
    </div>
  );
};

// Skeleton components for better loading states
const ProductCardSkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fadeInScale">
    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 shimmer"></div>
    <div className="p-5 space-y-3">
      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded shimmer"></div>
      <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded shimmer"></div>
      <div className="flex space-x-2">
        <div className="h-4 w-16 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded shimmer"></div>
        <div className="h-4 w-12 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded shimmer"></div>
      </div>
      <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded shimmer"></div>
      <div className="h-10 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-700 dark:to-blue-600 rounded shimmer"></div>
    </div>
  </div>
);

const CategorySkeleton = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fadeInScale">
    <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 shimmer"></div>
    <div className="p-4 space-y-2">
      <div className="h-5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded shimmer"></div>
      <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded shimmer"></div>
    </div>
  </div>
);

const Loading = ({ 
  text = 'Loading...', 
  size = 'md', 
  fullPage = false,
  className = '',
  type = 'spinner' // 'spinner', 'products', 'categories'
}) => {
  if (type === 'products') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (type === 'categories') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <CategorySkeleton key={index} />
        ))}
      </div>
    );
  }

  const content = (
    <div className={`flex flex-col items-center justify-center space-y-4 animate-fadeInScale ${className}`}>
      <LoadingSpinner size={size} />
      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{text}</p>
    </div>
  );

  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        {content}
      </div>
    );
  }

  return content;
};

Loading.Spinner = LoadingSpinner;
Loading.ProductSkeleton = ProductCardSkeleton;
Loading.CategorySkeleton = CategorySkeleton;

export default Loading;