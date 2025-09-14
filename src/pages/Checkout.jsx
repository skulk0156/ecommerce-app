import React from 'react';
import { Card, Button } from '../components/ui';

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Checkout
        </h1>
        <Card padding="lg" className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Checkout Coming Soon
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The checkout functionality is being implemented. Please check back later!
          </p>
          <Button variant="primary">
            Back to Cart
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;