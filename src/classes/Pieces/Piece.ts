export default abstract class Piece {
  constructor(
    protected moves: PIECE_MOVES[],
    protected attackMoves: PIECE_MOVES[],
    protected color: PIECE_COLORS
  ) {}
}

export enum PIECE_MOVES {
  FORWARD = 1,
  FORWARD_LEFT = -7,
  FORWARD_RIGHT = 9,
  BACKWARD = -1,
  BACKWARD_LEFT = -9,
  BACKWARD_RIGHT = 7,
}

export enum PIECE_COLORS {
  WHITE = "WHITE",
  BLACK = "BLACK",
}
