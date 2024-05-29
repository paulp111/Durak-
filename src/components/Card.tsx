import React from 'react';

interface CardProps {
  image: string;
  code: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, code, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={code} className="w-full h-full object-cover rounded-lg shadow-lg" />
    </div>
  );
};

export default Card;
