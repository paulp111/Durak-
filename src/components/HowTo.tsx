import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HowTo.css';

const HowTo: React.FC = () => {
  return (
    <div className="how-to">
      <h1>How To Play</h1>
      <p>Durak is a Russian origin card game of attack and defense.

It is said that in this game there are no winners, only one loser. The last person with cards in their hand is the loser (the fool or “durak”).

The objective is to play all your cards before your opponents in several rounds of attack and defense until there are no cards left in the deck.

It is played with 36 cards of the standard deck, from lowest to highest value: 6 7 8 9 10 J Q K A

How to play Durak
Although the rules seem complex, once you start playing it's very simple.

Before starting a card is placed face up (crossed under the deck) that will indicate the “trump” suit.

Each player is dealt 6 cards. If any player has all red, black or 5 cards of the same suit, cards must be dealt again.

In each round there is a defender (indicated with a shield) and three attackers.

The player who has the lowest trump card in their hand starts attacking.
The player on their left is the defender.
Attack and defense
The attacker plays a card face up on the table.
The defender must respond with a higher card of the same suit or a trump suit card in order not to lose the defense.
As many attacks can be made as the defender has cards up to a maximum of 6.

To attack again there must be a card of the same value on the table.
If a player can no longer attack, they pass the turn to the player on their left.
For example, player 1 attacks with 6♠. The defender responds with a Q♠. Player 1 could attack again with a 6 or a Q of any suit.

End of the round
The round ends when all players had a chance to attack or the maximum number of attacks was reached.

If the defender has succeeded, all cards on the table will be discarded and he/she will be the first to attack in the next round.
If the defender fails, they must draw all the cards from the table and lose the turn to attack in the next round.
At the end of the round, all players must draw from the deck in order until they have 6 cards again, first, the attacker players and last, the defender.

End of the game
The first player who has no cards left, wins as long as there are no cards available to draw.

The other players will keep playing to save themselves from being the «fool».</p>
      <Link to="/">
        <button className="button">Zurück</button>
      </Link>
    </div>
  );
};

export default HowTo;
