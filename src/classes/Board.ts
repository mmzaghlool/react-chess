import Cell, { cellNames } from './Cell';
import Pawn from './Pieces/Pawn';
import Piece, { PIECE_COLORS } from './Pieces/Piece';

/**
 * @class Board
 *
 */
export default class Board {
    static BOARD_CELLS_NUMBER = 64;
    static BOARD_CELLS_WIDTH = 8;

    private _cells: Cell[] = [];
    private whiteRemovedPieces: Piece[] = [];
    private blackRemovedPieces: Piece[] = [];

    constructor() {
        this.fillBoard();
    }

    public get cells(): Cell[] {
        return this._cells;
    }

    public get renderCells(): Cell[] {
        return this._cells;
    }

    /**
     * Initiate board pieces with its default values
     */
    fillBoard() {
        const cells = [];
        for (let i = 0; i < Board.BOARD_CELLS_NUMBER; i++) {
            const cellName = Object.keys(cellNames)[i] as cellNames;

            let piece: Piece | null = null;
            if (i < 16) {
                piece = new Pawn(PIECE_COLORS.WHITE);
            } else if (i >= Board.BOARD_CELLS_NUMBER - 16) {
                piece = new Pawn(PIECE_COLORS.BLACK);
            }

            cells.push(new Cell(cellName, piece));
        }

        this._cells = cells;
    }

    /**
     * TODO:
     * Get the piece in specific cell
     */
    getCellPiece(cellName: cellNames): Piece | undefined {
        const cell = this._cells.find((cell) => cell.name === cellName);
        return cell && cell.piece ? cell.piece : undefined;
    }

    /**
     * TODO:
     * Move piece from cell to other cell
     */
    move(from: Cell, to: Cell) {
        // Check if applicable
        // Remove old piece if available
        // Add the new piece
    }
}
