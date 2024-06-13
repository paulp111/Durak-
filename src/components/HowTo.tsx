import React from "react";
import { Link } from "react-router-dom";
import "../styles/HowTo.css";

interface HowToProps {
  playClickSound: () => void;
}

const HowTo: React.FC<HowToProps> = ({ playClickSound }) => {
  return (
    <div className="how-to">
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
      <Link to="/" onClick={playClickSound}>
        <button className="button">Zurück</button>
      </Link>
      <div className="chibit-image-container">
        <div className="speech-bubble">Game made by paulp111</div>
      </div>
    </div>
  );
};

export default HowTo;
