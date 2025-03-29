import React from 'react';

const DashboardPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Powerful Dashboard
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Monitor and manage your carbon emissions in real-time
        </p>
        
        <div className="bg-gray-700 rounded-lg p-8 md:p-16 flex items-center justify-center text-white">
          <img 
            src="/images/dashboard-preview.png" 
            alt="Dashboard Preview" 
            className="max-w-full rounded shadow"
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentElement.innerHTML = "Dashboard Preview Image";
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;