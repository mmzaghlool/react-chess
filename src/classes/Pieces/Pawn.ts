import Piece, { pieceMovesType, PIECE_COLORS, PIECE_MOVES } from './Piece';

export default class Pawn extends Piece {
    constructor(color: PIECE_COLORS) {
        const moves: pieceMovesType[] = [{ move: PIECE_MOVES.FORWARD, recurrent: 0 }];
        const attackMoves: pieceMovesType[] = [
            { move: PIECE_MOVES.FORWARD_LEFT, recurrent: 0 },
            { move: PIECE_MOVES.FORWARD_RIGHT, recurrent: 0 },
        ];
        const firstMove: pieceMovesType[] = [{ move: PIECE_MOVES.FORWARD, recurrent: 1 }];
        const render = `P(${color === PIECE_COLORS.BLACK ? 'B' : 'W'})`;

        super(color, render, moves, attackMoves, firstMove);
    }
}
