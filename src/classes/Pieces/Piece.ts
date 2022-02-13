export enum PIECE_MOVES {
    FORWARD = 1,
    FORWARD_LEFT = -7,
    FORWARD_RIGHT = 9,
    BACKWARD = -1,
    BACKWARD_LEFT = -9,
    BACKWARD_RIGHT = 7,
}

export enum PIECE_COLORS {
    WHITE = 'WHITE',
    BLACK = 'BLACK',
}
export type pieceMovesType = PIECE_MOVES | { move: PIECE_MOVES; recurrent: number };

export default abstract class Piece {
    protected _attackMoves: pieceMovesType[];
    protected _firstMove: pieceMovesType[];

    constructor(
        protected color: PIECE_COLORS,
        protected _render: string,
        protected _moves: pieceMovesType[],
        attackMoves?: pieceMovesType[],
        firstMove?: pieceMovesType[],
    ) {
        if (typeof attackMoves !== 'undefined') this._attackMoves = attackMoves;
        else this._attackMoves = _moves;

        if (typeof firstMove !== 'undefined') this._firstMove = firstMove;
        else this._firstMove = _moves;
    }

    public get render(): string {
        return this._render;
    }

    public get moves(): pieceMovesType[] {
        return this._moves;
    }

    public get attackMoves(): pieceMovesType[] {
        return this._attackMoves;
    }

    public get firstMove(): pieceMovesType[] {
        return this._firstMove;
    }
}
