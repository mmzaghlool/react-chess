import Piece, { PIECE_COLORS, PIECE_MOVES } from "./Piece";

export default class Pawn extends Piece {
  constructor(color: PIECE_COLORS) {
    const moves: PIECE_MOVES[] = [PIECE_MOVES.FORWARD];
    const attackMoves: PIECE_MOVES[] = [PIECE_MOVES.FORWARD_LEFT, PIECE_MOVES.FORWARD_RIGHT];

    super(moves, attackMoves, color);
  }
}
