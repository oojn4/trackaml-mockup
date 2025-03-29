import React from 'react';
import Button from '../ui/Button';

const FeatureCard = ({ icon: Icon, title, description, url }) => {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <Icon size={24} className="text-gray-800" />
      </div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        {description}
      </p>
      <Button 
        to={url}
        variant="primary"
        size="sm"
        className="mt-2"
      >
        Try Now
      </Button>
    </div>
  );
};

export default FeatureCard;