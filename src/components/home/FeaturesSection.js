import React from 'react';
import { BarChart, CheckCircle } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart,
      title: "Carbon Reporting",
      description: "Generate detailed carbon emission reports compliant with international standards.",
      url:"/report"
    
    },
    {
      icon: CheckCircle,
      title: "Verification Process",
      description: "Third-party verification system ensuring accuracy and credibility of your reports.",
      url:"/validate"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Comprehensive Features
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              url={feature.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;