import { useEffect, useState } from "react";
import Board from "../classes/Board";
import Cell from "../classes/Cell";
import styles from "./board.module.scss";

function BoardView() {
  const [board, setBoard] = useState<Board>(new Board());

  useEffect(() => {
    renderTableContent(board.cells);
  });

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
      </tr>
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

      {[...arr]}
    </>
  );
}

function renderTableContent(cells: Cell[]) {
  for (let i = 0; i < cells.length; i++) {
    const { piece, name } = cells[i];
    if (piece === null) {
      continue;
    }

    const cell = document.getElementById(`board-cell-${name}`) as HTMLTableCellElement | null;
    if (cell === null) {
      continue;
    }

    cell.innerHTML = piece.render;
  }
}
