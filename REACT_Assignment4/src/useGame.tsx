import { useEffect, useState } from "react";
import { GameStatus, Player, Squares } from "./types";
import getWinner from "./getWinner";

const STORAGE_KEY = "tic-tac-toe-game-state";

const initialSquares = [
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
  [undefined, undefined, undefined],
];
const initialPlayer: Player = "X";
const initialStatus: GameStatus = "PLAYING";
const initialMaxRemainingMoves = 9;

export default function useGame() {
  const [squares, setSquares] = useState<Squares>(initialSquares);
  const [curPlayer, setCurPlayer] = useState<Player>(initialPlayer);
  const [status, setStatus] = useState<GameStatus>(initialStatus);
  const [maxRemainingMoves, setMaxRemainingMoves] = useState<number>(
    initialMaxRemainingMoves
  );
  const [moveHistory, setMoveHistory] = useState<Squares[]>([]);

  useEffect(() => {
    const winner = getWinner(squares);
    if (winner) {
      setStatus("WON");
      setMaxRemainingMoves(0);
    } else if (maxRemainingMoves === 0) {
      setStatus("DRAW");
    }
  }, [squares, maxRemainingMoves]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && event.newValue) {
        const newState = JSON.parse(event.newValue);
        setSquares(newState.squares);
        setCurPlayer(newState.curPlayer);
        setStatus(newState.status);
        setMaxRemainingMoves(newState.maxRemainingMoves);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        squares,
        curPlayer,
        status,
        maxRemainingMoves,
      })
    );
  }, [squares, curPlayer, status, maxRemainingMoves, moveHistory]);

  function onMarkSquare(rowIndex: number, columnIndex: number) {
    if (status !== "PLAYING" || squares[rowIndex][columnIndex]) return;

    const newSquares = squares.map((row, rIndex) =>
      row.map((square, cIndex) =>
        rIndex === rowIndex && cIndex === columnIndex ? curPlayer : square
      )
    );
    setSquares(newSquares);
    setCurPlayer(curPlayer === "X" ? "O" : "X");
    setMaxRemainingMoves(maxRemainingMoves - 1);
    setMoveHistory([...moveHistory, squares]);
  }

  function resetGame() {
    setSquares(initialSquares);
    setCurPlayer(initialPlayer);
    setStatus(initialStatus);
    setMaxRemainingMoves(initialMaxRemainingMoves);
    setMoveHistory([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  function loadGameState() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const { squares, curPlayer, status, maxRemainingMoves } =
        JSON.parse(savedState);
      setSquares(squares);
      setCurPlayer(curPlayer);
      setStatus(status);
      setMaxRemainingMoves(maxRemainingMoves);
    }
  }

  function undoMove() {
    if (moveHistory.length > 0) {
      const previousMove = moveHistory.pop(); // Get the last move from history
      if (previousMove) {
        setSquares(previousMove);
        setCurPlayer(curPlayer === "X" ? "O" : "X");
        setMaxRemainingMoves(maxRemainingMoves + 1);
      }
    }
  }

  return {
    squares,
    curPlayer,
    status,
    maxRemainingMoves,
    onMarkSquare,
    resetGame,
    loadGameState,
    undoMove,
  };
}
