import React from 'react';

interface CardProps {
  image: string;
  code: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, code, onClick }) => {
  return (
    <img src={image} alt={code} onClick={onClick} className="w-16 h-24 cursor-pointer" />
  );
};

export default Card;
