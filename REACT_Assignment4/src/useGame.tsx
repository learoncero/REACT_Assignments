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
  const [moveHistory, setMoveHistory] = useState<Squares[]>([initialSquares]);
  const [currentMove, setCurrentMove] = useState<number>(0);

  function saveToLocalStorage() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        squares,
        curPlayer,
        status,
        maxRemainingMoves,
        moveHistory,
        currentMove,
      })
    );
  }

  function onMarkSquare(rowIndex: number, columnIndex: number) {
    if (status !== "PLAYING" || squares[rowIndex][columnIndex]) return;

    const newSquares = squares.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) => (j === columnIndex ? curPlayer : cell))
        : row
    );

    setSquares(newSquares);
    const newMoveHistory = moveHistory.slice(0, currentMove + 1);
    setMoveHistory([...newMoveHistory, newSquares]);
    setCurrentMove(currentMove + 1);

    const winner = getWinner(newSquares);
    if (winner) {
      setStatus("WON");
      return;
    } else if (maxRemainingMoves === 1) {
      setStatus("DRAW");
      return;
    } else {
      setCurPlayer(curPlayer === "X" ? "O" : "X");
      setMaxRemainingMoves(maxRemainingMoves - 1);
    }

    saveToLocalStorage();
  }

  function undoMove() {
    if (currentMove > 0) {
      setCurrentMove(currentMove - 1);
      setSquares(moveHistory[currentMove - 1]);
      setCurPlayer(currentMove % 2 === 0 ? "O" : "X");
      setMaxRemainingMoves(9 - (currentMove - 1));
      if (status === "WON" || status === "DRAW") {
        setStatus("PLAYING");
      }
    }

    saveToLocalStorage();
  }

  function resetGame() {
    setSquares(initialSquares);
    setCurPlayer(initialPlayer);
    setStatus(initialStatus);
    setMaxRemainingMoves(initialMaxRemainingMoves);
    setMoveHistory([initialSquares]);
    setCurrentMove(0);
    localStorage.removeItem(STORAGE_KEY);
  }

  function loadGameState() {
    const savedState = localStorage.getItem(STORAGE_KEY);
    console.log(savedState);
    if (savedState) {
      const {
        squares,
        curPlayer,
        status,
        maxRemainingMoves,
        moveHistory,
        currentMove,
      } = JSON.parse(savedState);
      setSquares(squares);
      setCurPlayer(curPlayer);
      setStatus(status);
      setMaxRemainingMoves(maxRemainingMoves);
      setMoveHistory(moveHistory);
      setCurrentMove(currentMove);
    }

    saveToLocalStorage();
  }

  function jumpTo(move: number) {
    setCurrentMove(move);
    setSquares(moveHistory[move as number]);
    setCurPlayer((move as number) % 2 === 0 ? "X" : "O");
    setMaxRemainingMoves(9 - (move as number));

    const winner = getWinner(moveHistory[move as number]);
    if (winner) {
      setStatus("WON");
    } else if (9 - (move as number) === 0) {
      setStatus("DRAW");
    } else {
      setStatus("PLAYING");
    }

    saveToLocalStorage();
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
    moveHistory,
    currentMove,
    jumpTo,
  };
}
