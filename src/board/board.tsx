import { useCallback, useEffect, useState } from 'react';
import Board from '../classes/Board';
import styles from './board.module.scss';

const board = new Board();

function BoardView() {
    const [selectedCell, setSelectedCell] = useState<string | null>(null);

    // Add selected class name to the selected cell and remove it from the others
    useEffect(() => {
        const { cells } = board;

        for (let i = 0; i < cells.length; i++) {
            const { name, id } = cells[i];

            const cell = document.getElementById(id) as HTMLTableCellElement | null;
            if (cell === null) continue;

            cell.className = selectedCell === name ? `${styles.selected}` : '';
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
