import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CarbonReport from '../components/report/CarbonReport';

const ReportPage = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
    <CarbonReport />
      
      <Footer />
    </div>
  );
};

export default ReportPage;