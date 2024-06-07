import React from "react";
import CardComponent from "./Card";
import { Card } from "../api/deckApi";

interface HandProps {
  cards: Card[];
  onCardClick?: (card: Card) => void;
}

const Hand: React.FC<HandProps> = ({ cards, onCardClick }) => {
  return (
    <div className="hand flex space-x-2">
      {cards.map((card) => (
        <CardComponent
          key={card.code}
          image={card.image}
          code={card.code}
          onClick={() => onCardClick && onCardClick(card)}
        />
      ))}
    </div>
  );
};

export default Hand;
