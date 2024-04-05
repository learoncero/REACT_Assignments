import { Squares } from "./types";
import styles from "./MoveHistory.module.css";

type Props = {
  moveHistory: Squares[];
  currentMove: number;
  jumpTo: (move: number) => void;
};

export default function MoveHistory({
  moveHistory,
  currentMove,
  jumpTo,
}: Props) {
  const moves = moveHistory.map((squares, move) => {
    const description = move === 0 ? "Go to game start" : `Go to move #${move}`;
    return (
      <li key={move}>
        <button
          className={`${styles.root} ${
            move === currentMove ? styles.disabled : styles.move
          }`}
          onClick={() => jumpTo(move)}
          disabled={move === currentMove}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      <h2>Move History</h2>
      <ol>{moves}</ol>
    </div>
  );
}
