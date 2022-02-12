import Piece from "./Pieces/Piece";

/**
 * @class Cell
 *
 */
export default class Cell {
  constructor(private name: string, private _piece: Piece | null) {}

  isOccupied() {
    return this.piece !== null;
  }

  public set piece(v: Piece | null) {
    this._piece = v;
  }

  public get piece(): Piece | null {
    return this._piece;
  }
}

export const cellNames = [
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a6",
  "a8",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b6",
  "b8",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c6",
  "c8",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d6",
  "d8",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e6",
  "e8",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f6",
  "f8",
  "g1",
  "g2",
  "g3",
  "g4",
  "g5",
  "g6",
  "g6",
  "g8",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "h6",
  "h8",
];
