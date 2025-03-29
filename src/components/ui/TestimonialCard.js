import React from 'react';

const TestimonialCard = ({ name, title, quote, imageSrc }) => {
  return (
    <div className="flex">
      <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 overflow-hidden">
        {imageSrc && (
          <img 
            src={imageSrc} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{title}</p>
        <p className="text-sm text-gray-700">
          "{quote}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;