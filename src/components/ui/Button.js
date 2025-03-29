import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href,
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded transition-colors';
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white border border-gray-300 text-gray-800 hover:bg-gray-50',
    accent: 'bg-brand-accent text-white hover:bg-opacity-90',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  // Internal link
  if (to) {
    return (
      <Link to={to} className={allClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // External link
  if (href) {
    return (
      <a href={href} className={allClasses} {...props}>
        {children}
      </a>
    );
  }
  
  // Regular button
  return (
    <button className={allClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;