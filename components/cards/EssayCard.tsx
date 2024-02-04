import React from 'react';
import {Essay, EssayCardProps} from '../../types/Essay';


const EssayCard: React.FC<EssayCardProps> = ({ essay }) => {
    return (
      <div className="border p-4 rounded shadow hover:shadow-md transition duration-300">
        {essay.imageUrl && <img src={essay.imageUrl} alt={essay.title} className="rounded mb-4 w-full" />}
        <h2 className="text-xl font-bold mb-2">{essay.title}</h2>
        <p className="mb-3 text-gray-600">{essay.summary}</p>
        <span className="text-gray-500 text-sm">{essay.date}</span>
      </div>
    );
  };
  
  export default EssayCard;