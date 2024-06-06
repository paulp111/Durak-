import React from 'react';
import CardComponent from './Card';
import { Card } from '../api/deckApi';

interface HandProps {
  cards: Card[];
  onCardClick?: (card: Card) => void;
  isOpponent?: boolean;
}

const Hand: React.FC<HandProps> = ({ cards, onCardClick, isOpponent = false }) => {
  return (
    <div className={`hand flex space-x-2 ${isOpponent ? 'opponent-hand' : ''}`}>
      {cards.map(card => (
        <CardComponent
          key={card.code}
          image={isOpponent ? 'https://www.deckofcardsapi.com/static/img/back.png' : card.image}
          code={card.code}
          onClick={() => onCardClick && onCardClick(card)}
        />
      ))}
    </div>
  );
};

export default Hand;
