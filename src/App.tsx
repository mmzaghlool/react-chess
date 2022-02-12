import styles from "./App.module.scss";
import BoardView from "./board/board";

function App() {
  return (
    <div className={styles.app}>
      <BoardView />
    </div>
  );
}

export default App;
