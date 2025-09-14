import React from 'react';
import { Shield, Users, Award, Truck, HeadphonesIcon, Heart } from 'lucide-react';
import { Card } from '../components/ui';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About ShopEase</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            We're passionate about providing you with the best shopping experience, 
            quality products, and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Founded in 2020, ShopEase started as a small online store with a big dream: 
                to make quality products accessible to everyone. What began as a passion project 
                has grown into a trusted e-commerce platform serving thousands of customers worldwide.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We believe that shopping should be easy, enjoyable, and accessible. That's why we've 
                built a platform that puts customer satisfaction at the heart of everything we do.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Today, we're proud to offer a curated selection of products from trusted brands, 
                backed by our commitment to quality, affordability, and exceptional service.
              </p>
            </div>
            <div className="lg:pl-8">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Our team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do and shape the way we serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Customer First</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Every decision we make is guided by what's best for our customers. 
                Your satisfaction is our top priority.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Quality Assurance</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We carefully curate our product selection to ensure every item meets 
                our high standards for quality and value.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Trust & Security</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your privacy and security are paramount. We use the latest technology 
                to protect your personal information and transactions.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We partner with reliable shipping providers to ensure your orders 
                arrive quickly and safely at your doorstep.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our dedicated customer support team is always ready to help you 
                with any questions or concerns you may have.
              </p>
            </Card>

            <Card padding="lg" className="text-center">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're building more than just a store - we're creating a community 
                of satisfied customers who trust and recommend us.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">5K+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Products Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind ShopEase who make it all possible
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1494790108755-2616b96c2a1e?w=300&h=300&fit=crop&crop=face",
                description: "Visionary leader with 15+ years in e-commerce"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
                description: "Tech expert ensuring our platform runs smoothly"
              },
              {
                name: "Emily Rodriguez",
                role: "Head of Customer Success",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
                description: "Dedicated to making every customer experience exceptional"
              }
            ].map((member, index) => (
              <Card key={index} padding="lg" className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            To democratize access to quality products by creating an intuitive, 
            trustworthy, and delightful shopping experience that connects customers 
            with the products they love, while building lasting relationships based 
            on trust, value, and exceptional service.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;