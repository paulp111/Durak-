import React from 'react';

interface CardProps {
  image: string;
  code: string;
  onClick?: () => void;
}

const CardComponent: React.FC<CardProps> = ({ image, code, onClick }) => {
  return (
    <img
      src={image}
      alt={code}
      className="w-16 h-24 cursor-pointer"
      onClick={onClick}
    />
  );
};

export default CardComponent;
