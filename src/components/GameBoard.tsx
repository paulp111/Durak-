import React, { useState, useEffect } from 'react';
import { fetchDeck, drawCards, Card } from '../api/deckApi';
import Hand from './Hand';
import '../styles/GameBoard.css';
import durakLogo from '../assets/Red_star.svg.png'; // Import the star image

const GameBoard: React.FC = () => {
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [opponent1Hand, setOpponent1Hand] = useState<Card[]>([]);
  const [opponent2Hand, setOpponent2Hand] = useState<Card[]>([]);
  const [trumpCard, setTrumpCard] = useState<Card | null>(null);
  const [deckId, setDeckId] = useState<string>('');
  const [table, setTable] = useState<{ attacker: Card; defender?: Card }[]>([]);
  const [turn, setTurn] = useState<'player' | 'opponent1' | 'opponent2'>('player');
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<'player' | 'opponent1' | 'opponent2' | null>(null);

  useEffect(() => {
    const startGame = async () => {
      const deckId = await fetchDeck();
      setDeckId(deckId);
      const playerCards = await drawCards(deckId, 6);
      const opponent1Cards = await drawCards(deckId, 6);
      const opponent2Cards = await drawCards(deckId, 6);
      const trumpCard = (await drawCards(deckId, 1))[0];
      setPlayerHand(playerCards);
      setOpponent1Hand(opponent1Cards);
      setOpponent2Hand(opponent2Cards);
      setTrumpCard(trumpCard);
      console.log('Game started with deckId:', deckId);
    };

    startGame();
  }, []);

  const handleAttack = (card: Card) => {
    if (turn === 'player') {
      setTable([...table, { attacker: card }]);
      setPlayerHand(playerHand.filter(c => c.code !== card.code));
      setTurn('opponent1');
      console.log('Player attacks with card:', card);
    }
  };

  const handleDefend = (card: Card) => {
    const lastAttack = table[table.length - 1];
    if (lastAttack && !lastAttack.defender) {
      setTable(
        table.map((entry, index) =>
          index === table.length - 1 ? { ...entry, defender: card } : entry
        )
      );
      console.log('Defends with card:', card);
    }
  };

  const aiMakeMove = async () => {
    if (turn === 'opponent1') {
      const validCard = opponent1Hand.find(card => isValidMove(card));
      if (validCard) {
        handleDefend(validCard);
        setOpponent1Hand(opponent1Hand.filter(c => c.code !== validCard.code));
      }
      setTurn('opponent2');
    } else if (turn === 'opponent2') {
      const validCard = opponent2Hand.find(card => isValidMove(card));
      if (validCard) {
        handleDefend(validCard);
        setOpponent2Hand(opponent2Hand.filter(c => c.code !== validCard.code));
      }
      setTurn('player');
    }
  };

  const isValidMove = (card: Card) => {
    const lastAttack = table[table.length - 1];
    if (!lastAttack || lastAttack.defender) {
      return false;
    }
    if (card.suit === lastAttack.attacker.suit && card.value > lastAttack.attacker.value) {
      return true;
    }
    if (card.suit === trumpCard?.suit && lastAttack.attacker.suit !== trumpCard.suit) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (turn !== 'player') {
      aiMakeMove();
    }
  }, [turn]);

  const endTurn = async () => {
    if (playerHand.length === 0 || opponent1Hand.length === 0 || opponent2Hand.length === 0) {
      checkGameOver();
      return;
    }

    const playerNewCards = await drawCards(deckId, 6 - playerHand.length);
    const opponent1NewCards = await drawCards(deckId, 6 - opponent1Hand.length);
    const opponent2NewCards = await drawCards(deckId, 6 - opponent2Hand.length);
    setPlayerHand([...playerHand, ...playerNewCards]);
    setOpponent1Hand([...opponent1Hand, ...opponent1NewCards]);
    setOpponent2Hand([...opponent2Hand, ...opponent2NewCards]);

    setTable([]);
    setTurn('player');
    console.log('Turn ended. Players drew new cards.');
  };

  const checkGameOver = () => {
    console.log('Checking game over condition...');
    if (playerHand.length === 0 && opponent1Hand.length > 0 && opponent2Hand.length > 0) {
      setGameOver(true);
      setWinner('player');
      console.log('Game Over! Player wins.');
    } else if (opponent1Hand.length === 0 && playerHand.length > 0 && opponent2Hand.length > 0) {
      setGameOver(true);
      setWinner('opponent1');
      console.log('Game Over! Opponent 1 wins.');
    } else if (opponent2Hand.length === 0 && playerHand.length > 0 && opponent1Hand.length > 0) {
      setGameOver(true);
      setWinner('opponent2');
      console.log('Game Over! Opponent 2 wins.');
    } else if (playerHand.length === 0 && opponent1Hand.length === 0 && opponent2Hand.length === 0) {
      setGameOver(true);
      setWinner(null);
      console.log('Game Over! It\'s a draw.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <img src={durakLogo} alt="Durak Logo" className="logo" /> {/* Add the star image here */}
      <h1 className="text-4xl font-bold text-center mb-4">Durak Game</h1>
      {gameOver ? (
        <div className="text-center text-2xl text-red-500 font-bold">
          {winner === 'player' && 'You Win! Opponents are the Durak!'}
          {winner === 'opponent1' && 'Opponent 1 Wins! You are the Durak!'}
          {winner === 'opponent2' && 'Opponent 2 Wins! You are the Durak!'}
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
          <div className="player-hand">
            <Hand cards={playerHand} onCardClick={handleAttack} />
          </div>
          <div className="opponent-hand opponent1-hand">
            <Hand cards={opponent1Hand.map(card => ({ ...card, image: 'https://www.deckofcardsapi.com/static/img/back.png' }))} />
          </div>
          <div className="opponent-hand opponent2-hand">
            <Hand cards={opponent2Hand.map(card => ({ ...card, image: 'https://www.deckofcardsapi.com/static/img/back.png' }))} />
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
