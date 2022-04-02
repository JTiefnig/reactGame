import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import HistoryButton from "./components/HistoryButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    if (localStorage.getItem("gamestate")) {
      this.state = JSON.parse(localStorage.getItem("gamestate"));
    } else {
      this.state = {
        history: [
          {
            squares: Array(9).fill(null),
          },
        ],
        xIsNext: true,
      };
    }
  }

  savestate() {
    localStorage.setItem(
      "gamestate",
      JSON.stringify({
        history: this.state.history,
        xIsNext: this.state.xIsNext,
      })
    );
  }

  handleClick(i) {
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

  clearBoard() {
    let clearhistory = [
      {
        squares: Array(9).fill(null),
      },
    ];

    this.setState({
      history: clearhistory,
      xIsNext: true,
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
    if (winner) {
      status = winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
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

    return (
      <>
        <div className="container">
          <div className="gameContainer">
            <Header onClick={() => this.clearBoard()} text="Tic Tac Toe" />
            <div>{status}</div>
            <div className="BoardContainer">
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
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
      return "Winner: " + squares[a];
    }
  }

  for (let i = 0; i < 9; i++) {
    if (squares[i] == null) return null;
  }

  return "Draw";
}
