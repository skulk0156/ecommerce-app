// Script to generate additional products for the Indian market
const additionalProducts = [];

// Electronics products
const electronicsProducts = [
  {
    name: "HP Pavilion Gaming Laptop",
    price: 54999,
    originalPrice: 69999,
    category: "Electronics",
    description: "Gaming laptop with NVIDIA GTX graphics and AMD Ryzen processor.",
    rating: 4.4,
    reviews: 890
  },
  {
    name: "Dell Inspiron 15 3000",
    price: 34999,
    originalPrice: 42999,
    category: "Electronics", 
    description: "Everyday laptop with Intel Core i3 processor and 8GB RAM.",
    rating: 4.1,
    reviews: 1567
  },
  {
    name: "Canon EOS 200D II DSLR",
    price: 42999,
    originalPrice: 54999,
    category: "Electronics",
    description: "Entry-level DSLR camera with 24.1MP sensor and dual pixel autofocus.",
    rating: 4.6,
    reviews: 678
  },
  {
    name: "Sony WH-CH720N Headphones",
    price: 7990,
    originalPrice: 12990,
    category: "Electronics",
    description: "Wireless noise canceling headphones with 35-hour battery life.",
    rating: 4.3,
    reviews: 2345
  },
  {
    name: "LG 24 inch IPS Monitor",
    price: 9999,
    originalPrice: 15999,
    category: "Electronics",
    description: "Full HD IPS monitor with HDR10 support and borderless design.",
    rating: 4.2,
    reviews: 1890
  }
];

// Clothing products  
const clothingProducts = [
  {
    name: "H&M Cotton Polo Shirt",
    price: 999,
    originalPrice: 1499,
    category: "Clothing",
    description: "Classic cotton polo shirt in multiple colors.",
    rating: 4.0,
    reviews: 2345
  },
  {
    name: "Zara Men's Chinos",
    price: 2799,
    originalPrice: 3999,
    category: "Clothing", 
    description: "Slim fit chino trousers in stretch cotton.",
    rating: 4.3,
    reviews: 1567
  },
  {
    name: "Forever 21 Denim Jacket",
    price: 1999,
    originalPrice: 2999,
    category: "Clothing",
    description: "Classic denim jacket with vintage wash.",
    rating: 4.1,
    reviews: 890
  },
  {
    name: "Puma Track Pants",
    price: 1799,
    originalPrice: 2499,
    category: "Clothing",
    description: "Comfortable track pants for sports and casual wear.",
    rating: 4.4,
    reviews: 3456
  },
  {
    name: "Van Heusen Dress Shirt",
    price: 1299,
    originalPrice: 2199,
    category: "Clothing",
    description: "Formal dress shirt with wrinkle-free fabric.",
    rating: 4.2,
    reviews: 1234
  }
];

// Home & Kitchen products
const homeKitchenProducts = [
  {
    name: "Preethi Zodiac MG 218 Mixer",
    price: 5999,
    originalPrice: 8999,
    category: "Home & Kitchen",
    description: "750W mixer grinder with 5 stainless steel jars.",
    rating: 4.3,
    reviews: 5678
  },
  {
    name: "Hawkins Pressure Cooker 5L",
    price: 1799,
    originalPrice: 2499,
    category: "Home & Kitchen",
    description: "Classic aluminum pressure cooker with safety features.",
    rating: 4.5,
    reviews: 8901
  },
  {
    name: "Nilkamal Study Chair",
    price: 2999,
    originalPrice: 4999,
    category: "Home & Kitchen",
    description: "Ergonomic study chair with adjustable height.",
    rating: 4.0,
    reviews: 1234
  },
  {
    name: "Cello Opalware Dinner Set",
    price: 899,
    originalPrice: 1499,
    category: "Home & Kitchen",
    description: "12-piece opalware dinner set with elegant design.",
    rating: 4.2,
    reviews: 2345
  },
  {
    name: "Butterfly Smart Glass Kettle",
    price: 1299,
    originalPrice: 1999,
    category: "Home & Kitchen",
    description: "1.7L glass electric kettle with auto shut-off.",
    rating: 4.1,
    reviews: 1567
  }
];

console.log('Additional products generated!');