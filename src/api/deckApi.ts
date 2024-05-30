export interface Card {
  code: string;
  image: string;
  suit: string;
  value: string;
}

export async function fetchDeck(): Promise<string> {
  const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  const data = await response.json();
  return data.deck_id;
}

export async function drawCards(deckId: string, count: number): Promise<Card[]> {
  const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`);
  const data = await response.json();
  return data.cards;
}
