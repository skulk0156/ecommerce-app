import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = 'default',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-xl shadow-elegant border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300';
  
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hover ? 'hover:shadow-elegant-lg hover:-translate-y-1' : '';

  const classes = [
    baseClasses,
    paddingClasses[padding],
    hoverClasses,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;