// App Constants
export const APP_NAME = 'IndiaKart';
export const CURRENCY = '₹';
export const ITEMS_PER_PAGE = 12;

// Navigation Links
export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'Products', href: '/products', id: 'products' },
  { name: 'About', href: '/about', id: 'about' },
  { name: 'Contact', href: '/contact', id: 'contact' },
];

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Shipping Info', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Size Guide', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'YouTube', href: '#' },
  ],
};

// Sort Options
export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Customer Rating' },
];

// Filter Price Ranges
export const PRICE_RANGES = [
  { value: 'all', label: 'All Prices' },
  { value: '0-500', label: 'Under ₹500' },
  { value: '500-1000', label: '₹500 - ₹1,000' },
  { value: '1000-2500', label: '₹1,000 - ₹2,500' },
  { value: '2500-5000', label: '₹2,500 - ₹5,000' },
  { value: '5000+', label: '₹5,000+' },
];

// Form Validation Rules
export const VALIDATION_RULES = {
  email: {
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
  },
  name: {
    required: 'Name is required',
    minLength: {
      value: 2,
      message: 'Name must be at least 2 characters',
    },
  },
  phone: {
    required: 'Phone number is required',
    pattern: {
      value: /^[\+]?[6-9]\d{9}$/,
      message: 'Invalid Indian phone number (10 digits starting with 6-9)',
    },
  },
  address: {
    required: 'Address is required',
    minLength: {
      value: 10,
      message: 'Address must be at least 10 characters',
    },
  },
  city: {
    required: 'City is required',
    minLength: {
      value: 2,
      message: 'City must be at least 2 characters',
    },
  },
  zipCode: {
    required: 'PIN code is required',
    pattern: {
      value: /^\d{6}$/,
      message: 'Invalid PIN code format (6 digits required)',
    },
  },
};

// Payment Methods
export const PAYMENT_METHODS = [
  { id: 'upi', name: 'UPI Payment', icon: '📱' },
  { id: 'paytm', name: 'Paytm', icon: '💙' },
  { id: 'phonepe', name: 'PhonePe', icon: '💜' },
  { id: 'google-pay', name: 'Google Pay', icon: '🔵' },
  { id: 'credit-card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'net-banking', name: 'Net Banking', icon: '🏦' },
  { id: 'cod', name: 'Cash on Delivery', icon: '💵' },
];

// Shipping Options
export const SHIPPING_OPTIONS = [
  { 
    id: 'standard', 
    name: 'Standard Delivery', 
    price: 40, 
    time: '5-7 days' 
  },
  { 
    id: 'express', 
    name: 'Express Delivery', 
    price: 99, 
    time: '2-3 days' 
  },
  { 
    id: 'same-day', 
    name: 'Same Day Delivery', 
    price: 149, 
    time: 'Today' 
  },
  { 
    id: 'free', 
    name: 'Free Delivery', 
    price: 0, 
    time: '7-10 days (₹500+ orders)' 
  },
];

// API Endpoints (for future backend integration)
export const API_ENDPOINTS = {
  products: '/api/products',
  categories: '/api/categories',
  auth: {
    login: '/api/auth/login',
    signup: '/api/auth/signup',
    logout: '/api/auth/logout',
    profile: '/api/auth/profile',
  },
  orders: '/api/orders',
  cart: '/api/cart',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  cart: 'cartItems',
  user: 'user',
  theme: 'theme',
  wishlist: 'wishlist',
};

// Error Messages
export const ERROR_MESSAGES = {
  network: 'Network error. Please check your connection.',
  server: 'Server error. Please try again later.',
  notFound: 'The requested resource was not found.',
  unauthorized: 'You are not authorized to perform this action.',
  validation: 'Please check your input and try again.',
  generic: 'Something went wrong. Please try again.',
};