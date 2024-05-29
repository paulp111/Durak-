import React, { useState, useEffect } from 'react';
import { fetchDeck, drawCards, Card } from '../api/deckApi';
import Hand from './Hand';
import '../styles/GameBoard.css';

const GameBoard: React.FC = () => {
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [opponentHand, setOpponentHand] = useState<Card[]>([]);
  const [trumpCard, setTrumpCard] = useState<Card | null>(null);
  const [deckId, setDeckId] = useState<string>('');
  const [table, setTable] = useState<{ attacker: Card; defender?: Card }[]>([]);
  const [turn, setTurn] = useState<'player' | 'opponent'>('player');
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<'player' | 'opponent' | null>(null);

  useEffect(() => {
    const startGame = async () => {
      const deckId = await fetchDeck();
      setDeckId(deckId);
      const playerCards = await drawCards(deckId, 6);
      const opponentCards = await drawCards(deckId, 6);
      const trumpCard = (await drawCards(deckId, 1))[0];
      setPlayerHand(playerCards);
      setOpponentHand(opponentCards);
      setTrumpCard(trumpCard);
      console.log('Game started with deckId:', deckId);
    };

    startGame();
  }, []);

  const handleAttack = (card: Card) => {
    if (turn === 'player') {
      setTable([...table, { attacker: card }]);
      setPlayerHand(playerHand.filter(c => c.code !== card.code));
      setTurn('opponent');
      console.log('Player attacks with card:', card);
    }
  };

  const handleDefend = (card: Card) => {
    if (turn === 'opponent') {
      const lastAttack = table[table.length - 1];
      if (lastAttack && !lastAttack.defender) {
        setTable(
          table.map((entry, index) =>
            index === table.length - 1 ? { ...entry, defender: card } : entry
          )
        );
        setOpponentHand(opponentHand.filter(c => c.code !== card.code));
        setTurn('player');
        console.log('Opponent defends with card:', card);
      }
    }
  };

  const endTurn = async () => {
    // Check if game over condition is met before drawing new cards
    if (playerHand.length === 0 || opponentHand.length === 0) {
      checkGameOver();
      return;
    }

    // Draw new cards for player and opponent to maintain 6 cards in hand
    const playerNewCards = await drawCards(deckId, 6 - playerHand.length);
    const opponentNewCards = await drawCards(deckId, 6 - opponentHand.length);
    setPlayerHand([...playerHand, ...playerNewCards]);
    setOpponentHand([...opponentHand, ...opponentNewCards]);

    // Clear the table and start a new round
    setTable([]);
    setTurn('player');
    console.log('Turn ended. Players drew new cards.');
  };

  const checkGameOver = () => {
    console.log('Checking game over condition...');
    if (playerHand.length === 0 && opponentHand.length > 0) {
      setGameOver(true);
      setWinner('opponent');
      console.log('Game Over! Opponent wins.');
    } else if (opponentHand.length === 0 && playerHand.length > 0) {
      setGameOver(true);
      setWinner('player');
      console.log('Game Over! Player wins.');
    } else if (playerHand.length === 0 && opponentHand.length === 0) {
      setGameOver(true);
      setWinner(null);
      console.log('Game Over! It\'s a draw.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Durak Game</h1>
      {gameOver ? (
        <div className="text-center text-2xl text-red-500 font-bold">
          {winner === 'player' && 'You Win! Opponent is the Durak!'}
          {winner === 'opponent' && 'You Lose! You are the Durak!'}
          {winner === null && 'It\'s a draw!'}
        </div>
      ) : (
        <>
          <div className="trump-card text-center mb-4">
            {trumpCard && <img src={trumpCard.image} alt={trumpCard.code} className="mx-auto" />}
            <p className="text-lg">Trump Card</p>
          </div>
          <div className="table mb-4">
            <h2 className="text-2xl font-semibold mb-2">Table</h2>
            <div className="table-cards flex flex-wrap">
              {table.map((entry, index) => (
                <div key={index} className="flex items-center mb-2">
                  <img src={entry.attacker.image} alt={entry.attacker.code} className="w-16 h-24" />
                  {entry.defender && (
                    <img src={entry.defender.image} alt={entry.defender.code} className="w-16 h-24 ml-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="player-hand mb-4">
            <h2 className="text-2xl font-semibold mb-2">Your Hand</h2>
            <Hand cards={playerHand} onCardClick={handleAttack} />
          </div>
          <div className="opponent-hand mb-4">
            <h2 className="text-2xl font-semibold mb-2">Opponent's Hand</h2>
            <Hand cards={opponentHand} onCardClick={handleDefend} />
          </div>
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={endTurn}
            disabled={turn !== 'player'}
          >
            End Turn
          </button>
        </>
      )}
    </div>
  );
};

export default GameBoard;
