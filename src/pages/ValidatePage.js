import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CarbonValidate from '../components/validate/CarbonValidate';

const ValidatePage = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <CarbonValidate />
      <Footer />
    </div>
  );
};

export default ValidatePage;