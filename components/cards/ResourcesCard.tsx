import React from 'react';
import { ResourceCardProps } from '@/types/Resource'

const ResourcesCard: React.FC<ResourceCardProps> = ({ imageUrl, title, description, learnMoreUrl }) => {
    return (
      <div className="card bg-white shadow-md rounded-md overflow-hidden">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <a href={learnMoreUrl} className="text-indigo-600 hover:text-indigo-800 transition duration-300">Learn More</a>
        </div>
      </div>
    );
  };
  
  export default ResourcesCard;