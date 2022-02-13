import { useCallback, useEffect, useState } from 'react';
import Board from '../classes/Board';
import Cell, { cellCharType, cellNames, cellNumType } from '../classes/Cell';
import { PIECE_DIRECTION, PIECE_MOVES } from '../classes/Pieces/Piece';
import styles from './board.module.scss';

const board = new Board();

function BoardView() {
    const [selectedCell, setSelectedCell] = useState<string | null>(null);

    // Add selected class name to the selected cell and remove it from the others
    useEffect(() => {
        const { cells } = board;

        // UnHighlight the selected cells
        highlightCells(cells, [], styles.selected);
        highlightCells(cells, [], styles['valid-move']);
        highlightCells(cells, [], styles['invalid-move']);

        if (selectedCell === null) {
            return;
        }
        // Highlight the selected cell
        highlightCells(cells, [selectedCell], styles.selected);

        const piece = board.getCellPiece(selectedCell as cellNames);

        if (typeof piece !== 'undefined') {
            const { moves, attackMoves, firstMove, direction } = piece;

            const cellChar = selectedCell.charAt(0) as cellCharType;
            const cellNum = Number(selectedCell.charAt(1)) as cellNumType;

            const validMoves: string[] = [];
            const invalidMoves: string[] = [];

            // TODO: Check attack and first moves
            moves.forEach((move) => {
                switch (move.move) {
                    case PIECE_MOVES.FORWARD:
                        validMoves.push(nextCell(direction, cellChar, cellNum, 'FORWARD'));
                        break;
                    case PIECE_MOVES.FORWARD_LEFT:
                        validMoves.push(nextCell(direction, cellChar, cellNum, 'FORWARD', 'LEFT'));
                        break;
                    case PIECE_MOVES.FORWARD_RIGHT:
                        validMoves.push(nextCell(direction, cellChar, cellNum, 'FORWARD', 'RIGHT'));
                        break;
                    case PIECE_MOVES.BACKWARD:
                        validMoves.push(nextCell(direction, cellChar, cellNum, 'BACKWARD'));
                        break;
                    case PIECE_MOVES.BACKWARD_LEFT:
                        validMoves.push(nextCell(direction, cellChar, cellNum, 'BACKWARD', 'LEFT'));
                        break;
                    case PIECE_MOVES.BACKWARD_RIGHT:
                        validMoves.push(nextCell(direction, cellChar, cellNum, 'BACKWARD', 'RIGHT'));
                        break;
                }
            });

            // Highlight valid and invalid moves
            highlightCells(cells, validMoves, styles['valid-move']);
            highlightCells(cells, invalidMoves, styles['invalid-move']);
        }
    }, [selectedCell]);

    // Put every piece in it's cell at every render
    useEffect(() => renderTableContent());
    const renderTableContent = useCallback(() => {
        const { cells } = board;

        for (let i = 0; i < cells.length; i++) {
            const { piece, name, id } = cells[i];
            const cell = document.getElementById(id) as HTMLTableCellElement | null;

            if (cell === null) continue;

            cell.innerHTML = piece === null ? '' : piece.render;
            cell.onclick = () => setSelectedCell((prev) => (prev !== name ? name : null));
        }
    }, []);

    return (
        <div className={styles.board}>
            <table>
                <InitiateTable />
            </table>
        </div>
    );
}

export default BoardView;

function InitiateTable(): JSX.Element {
    const arr: JSX.Element[] = [];
    for (let i = Board.BOARD_CELLS_WIDTH; i > 0; i--) {
        arr.push(
            <tr id={`board-row-${i}`}>
                <td className={styles.header}>{i}</td>
                <td id={`board-cell-a${i}`}></td>
                <td id={`board-cell-b${i}`}></td>
                <td id={`board-cell-c${i}`}></td>
                <td id={`board-cell-d${i}`}></td>
                <td id={`board-cell-e${i}`}></td>
                <td id={`board-cell-f${i}`}></td>
                <td id={`board-cell-g${i}`}></td>
                <td id={`board-cell-h${i}`}></td>
            </tr>,
        );
    }

    return (
        <>
            <tr className={styles.header}>
                <td></td>
                <td>a</td>
                <td>b</td>
                <td>c</td>
                <td>d</td>
                <td>e</td>
                <td>f</td>
                <td>g</td>
                <td>h</td>
            </tr>

            {arr}
        </>
    );
}

function highlightCells(cells: Cell[], selected: string[], highlight: string) {
    for (let i = 0; i < cells.length; i++) {
        const { name, id } = cells[i];

        const cell = document.getElementById(id) as HTMLTableCellElement | null;
        if (cell === null) continue;

        const { classList } = cell;

        if (selected.includes(name) && !classList.contains(highlight)) {
            classList.add(highlight);
        } else if (!selected.includes(name) && classList.contains(highlight)) {
            classList.remove(highlight);
        }
    }
}

function nextCell(direction: PIECE_DIRECTION, cellChar: cellCharType, cellNum: cellNumType, vertical: 'FORWARD' | 'BACKWARD', horizontal?: 'RIGHT' | 'LEFT') {
    const newCellChar = typeof horizontal === 'undefined' ? cellChar : nextChar(direction, cellChar, horizontal === 'LEFT');
    const position = vertical === 'FORWARD' ? 1 : -1;
    if (direction === PIECE_DIRECTION.POSITIVE) return `${newCellChar}${cellNum + 1 * position}`;
    else return `${newCellChar}${cellNum - 1 * position}`;
}

function nextChar(direction: PIECE_DIRECTION, cellChar: cellCharType, isPrev = false) {
    if ((direction === PIECE_DIRECTION.POSITIVE && !isPrev) || (direction === PIECE_DIRECTION.NEGATIVE && isPrev)) {
        switch (cellChar) {
            case 'a':
                return 'b';
            case 'b':
                return 'c';
            case 'c':
                return 'd';
            case 'd':
                return 'e';
            case 'e':
                return 'f';
            case 'f':
                return 'g';
            case 'g':
                return 'h';

            default:
                return '';
        }
    } else {
        switch (cellChar) {
            case 'b':
                return 'a';
            case 'c':
                return 'b';
            case 'd':
                return 'c';
            case 'e':
                return 'd';
            case 'f':
                return 'e';
            case 'g':
                return 'f';
            case 'h':
                return 'g';

            default:
                return '';
        }
    }
}
