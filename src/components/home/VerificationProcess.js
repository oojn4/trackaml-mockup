import React from 'react';
import ProcessStep from '../ui/ProcessStep';

const VerificationProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description: "Gather emissions data from various sources"
    },
    {
      number: 2,
      title: "Report Generation",
      description: "Create comprehensive carbon reports"
    },
    {
      number: 3,
      title: "Verification",
      description: "Third-party verification process"
    },
    {
      number: 4,
      title: "Certification",
      description: "Receive verified carbon report"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Verification Process
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationProcess;