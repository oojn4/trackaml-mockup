import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-brand-primary">
          MRV Carbon
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/report" className="text-sm font-medium hover:text-brand-primary">Reports</Link>
          <Link to="/validate" className="text-sm font-medium hover:text-brand-primary">Verification</Link>
          {/* <Link to="/about" className="text-sm font-medium hover:text-brand-primary">About</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-brand-primary">Contact</Link> */}
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          {/* <Link to="/signin" className="text-sm font-medium hover:text-brand-primary">Sign in</Link> */}
          {/* <Button 
            to="/get-started"
            variant="primary"
            size="sm"
          >
            Get Started
          </Button> */}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <Link to="/report" className="text-sm font-medium">Reports</Link>
            <Link to="/validate" className="text-sm font-medium">Verification</Link>
            {/* <Link to="/about" className="text-sm font-medium">About</Link>
            <Link to="/contact" className="text-sm font-medium">Contact</Link>
            <Link to="/signin" className="text-sm font-medium">Sign in</Link>
            <Button 
              to="/get-started"
              variant="primary"
              size="sm"
              className="w-full text-center"
            >
              Get Started
            </Button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;