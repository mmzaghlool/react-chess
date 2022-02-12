import Cell, { cellNames } from "./Cell";
import Pawn from "./Pieces/Pawn";
import Piece, { PIECE_COLORS } from "./Pieces/Piece";

/**
 * @class Board
 *
 */
export default class Board {
  static BOARD_CELLS_NUMBER = 64;

  private cells: Cell[] = new Array(Board.BOARD_CELLS_NUMBER);
  private whiteRemovedPieces: Piece[] = [];
  private blackRemovedPieces: Piece[] = [];

  constructor() {
    this.fillBoard();
  }

  /**
   * Initiate board pieces with its default values
   */
  fillBoard() {
    this.cells = this.cells.map((cell, i) => {
      const piece: Piece = new Pawn(PIECE_COLORS.BLACK);

      return new Cell(cellNames[i], piece);
    });
  }

  /**
   * Get the piece in specific cell
   */
  getCellPiece() {}

  /**
   * Move piece from cell to other cell
   */
  move(from: Cell, to: Cell) {
    // Check if applicable
    // Remove old piece if available
    // Add the new piece
  }
}
