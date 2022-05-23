import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import HistoryButton from "./components/HistoryButton";
import BrowserDataWarning from "./components/BrowserDataWarning";
import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import WinCard from "./components/WinCard";

class App extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("gamestate")) {
      this.state = JSON.parse(localStorage.getItem("gamestate"));
    } else {
      this.clearBoard();
    }
  }

  savestate() {
    if (this.state.browserDataConfirmation)
      localStorage.setItem(
        "gamestate",
        JSON.stringify({
          history: this.state.history,
          xIsNext: this.state.xIsNext,
          browserDataConfirmation: this.state.browserDataConfirmation,
        })
      );
  }

  handleClick(i) {
    if (!this.state.xIsNext) {
      this.handleinput(i);
    }
  }

  handleinput(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
    });

    this.savestate();
  }

  handleKeyInput(event) {
    try {
      var inp = parseInt(event.key) - 1;
      if (inp >= 0 && inp < 9) {
        this.handleClick(inp);
      }
    } catch {}
  }

  clearBoard() {
    let first = Math.round(Math.random());

    let clearhistory = [
      {
        squares: Array(9).fill(null),
      },
    ];

    this.setState({
      history: clearhistory,
      xIsNext: first,
    });

    this.savestate();
  }

  confirmBrowserData(confirm) {
    this.setState({
      browserDataConfirmation: confirm,
      warningShown: true,
    });

    this.savestate();
  }

  jumpTo(move) {
    const newhist = this.state.history.slice(0, move + 1);

    console.log(move);

    this.setState({
      history: newhist,
      xIsNext: move % 2 === 0,
    });

    this.savestate();
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    let winnerCard = <></>;
    if (winner) {
      status = winner;
      winnerCard = (
        <WinCard winner={winner} onOk={() => this.clearBoard()}></WinCard>
      );
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      setTimeout(() => {
        if (this.state.xIsNext)
          calcNextMove(current.squares).then((move) => {
            this.handleinput(move);
            console.log(`move ${move}`);
          });
      }, 500);
    }

    const moves = history.map((step, move) => {
      if (move == 0) return <></>;

      return (
        <li key={move}>
          <HistoryButton
            onClick={() => this.jumpTo(move)}
            step={step}
            move={move}
          />
        </li>
      );
    });

    const warningRender = () => {
      if (!this.state.browserDataConfirmation && !this.state.warningShown) {
        return (
          <BrowserDataWarning
            onAccept={(val) => this.confirmBrowserData(val)}
          />
        );
      }

      return <></>;
    };

    return (
      <>
        {warningRender()}
        {winnerCard}
        <div className="container">
          <div
            className="gameContainer"
            onKeyPress={(event) => this.handleKeyInput(event)}
            tabIndex="0"
          >
            <Header onClick={() => this.clearBoard()} />
            <div>{status}</div>
            <div className="BoardContainer">
              <Board
                squares={current.squares}
                onClick={(i) => {
                  this.handleClick(i);
                }}
              ></Board>
            </div>
          </div>
        </div>

        <div className="historyContainer">
          <ol>{moves}</ol>
        </div>
      </>
    );
  }
}

export default App;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  for (let i = 0; i < 9; i++) {
    if (squares[i] == null) return null;
  }

  return "Draw";
}

function minimax(gameState, position, recursion = 0, xIsNext) {
  // do move
  let squares = Array.from(gameState);
  squares[position] = xIsNext ? "X" : "O";

  let winner = calculateWinner(squares);
  if (winner === "Draw") return 0;
  if (winner === "X") return 9 * 9 - recursion * recursion;
  if (winner === "O") return -(9 * 9 - recursion * recursion);

  let points = 0;
  for (let i = 0; i < 9; i++) {
    if (!squares[i]) {
      points += minimax(squares, i, recursion + 1, !xIsNext);
    }
  }

  return points;
}

// X = Computer
async function calcNextMove(gameState) {
  let points = -Infinity;
  let possibleMoves = [];

  for (let i = 0; i < 9; i++) {
    if (!gameState[i]) {
      let np = minimax(gameState, i, 0, true);
      if (np == points) {
        possibleMoves.push(i);
      }
      if (np > points) {
        possibleMoves = [];
        possibleMoves.push(i);
        points = np;
      }
    }
  }

  if (possibleMoves.length)
    return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
  return -1;
}
