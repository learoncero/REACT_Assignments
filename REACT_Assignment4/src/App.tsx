import Board from "./Board";
import Button from "./Button";
import Status from "./Status";
import styles from "./App.module.css";
import useGame from "./useGame";
import MoveHistory from "./MoveHistory";

export default function App() {
  const {
    squares,
    curPlayer,
    status,
    maxRemainingMoves,
    onMarkSquare,
    resetGame,
    loadGameState,
    undoMove,
    moveHistory,
    currentMove,
    jumpTo,
  } = useGame();

  return (
    <div className={styles.root}>
      <Board onMarkSquare={onMarkSquare} squares={squares} />
      <Status
        status={status}
        curPlayer={curPlayer}
        maxRemainingMoves={maxRemainingMoves}
      />
      <div className={styles.actions}>
        <Button variant="secondary" onClick={resetGame}>
          Reset
        </Button>
        <Button variant="secondary" onClick={loadGameState}>
          Load game state
        </Button>
        <Button variant="secondary" onClick={undoMove}>
          Undo last move
        </Button>
      </div>
      <MoveHistory
        moveHistory={moveHistory}
        currentMove={currentMove}
        jumpTo={jumpTo}
      />
    </div>
  );
}
