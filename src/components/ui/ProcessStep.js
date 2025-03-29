import React from 'react';

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
        <span>{number}</span>
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;