import React from 'react';
import Button from '../ui/Button';

const CtaSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="bg-black text-white rounded-lg p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Ready to Start Your Carbon Journey?
          </h2>
          <p className="mb-6">
            Join thousands of companies managing their carbon emissions effectively
          </p>
          <Button 
            href="/get-started"
            variant="secondary"
            className="bg-white text-black hover:bg-gray-100"
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;