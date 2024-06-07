import { drawCards, Card } from "../api/deckApi";

export class DurakGame {
  private deckId: string;
  private playerHand: Card[] = [];
  private opponentHand: Card[] = [];
  private trumpCard: Card | null = null;

  constructor(deckId: string) {
    this.deckId = deckId;
  }

  async start() {
    this.playerHand = await drawCards(this.deckId, 6);
    this.opponentHand = await drawCards(this.deckId, 6);
    this.trumpCard = (await drawCards(this.deckId, 1))[0];
    console.log("Trump Card:", this.trumpCard);
    console.log("Player Hand:", this.playerHand);
    console.log("Opponent Hand:", this.opponentHand);
  }
}
