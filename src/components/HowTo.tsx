import React from "react";
import { Link } from "react-router-dom";
import "../styles/HowTo.css";

const HowTo: React.FC = () => {
  return (
    <div className="how-to">
      <div className="highlight-box"></div>
      <h1>How To Play</h1>
      <p>
        Durak is a Russian origin card game of attack and defense.
        <br />
        It is said that in this game there are no winners, only one loser. The
        last person with cards in their hand is the loser (the fool or “durak”).
        <br />
        The objective is to play all your cards before your opponents in several
        rounds of attack and defense until there are no cards left in the deck.
        <br />
        It is played with 36 cards of the standard deck, from lowest to highest
        value: 6 7 8 9 10 J Q K A
        <br />
        How to play Durak
        <br />
        Although the rules seem complex, once you start playing it's very
        simple.
      </p>
      <Link to="/">
        <button className="back-button">
          <span>Back</span>
        </button>
      </Link>
    </div>
  );
};

export default HowTo;
