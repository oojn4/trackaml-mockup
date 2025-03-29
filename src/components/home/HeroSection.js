import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {

  return (
    <section className="py-24 bg-gray-50">  {/* Increased vertical padding */}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">  {/* Increased bottom margin */}
          Carbon Reporting &<br />Verification Made Simple
        </h1>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">  {/* Increased bottom margin */}
          Track, report, and verify your carbon emissions with precision and confidence using our advanced platform.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">  {/* Added bottom margin */}
          {/* <Button 
            href="/varivy"
            variant="primary"
          >
            Start Free Trial
          </Button> */}

          <Button 
            to="https://www.youtube.com/watch?v=mzNemBXHmJ0"
            variant="secondary"
          >
            Watch Demo
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;