import React from "react";

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    let sign = <></>;

    if (this.props.value === "X") {
      sign = (
        <>
          <line className="draw" x1="10%" y1="10%" x2="90%" y2="90%" />
          <line className="draw" x1="90%" y1="10%" x2="10%" y2="90%" />
        </>
      );
    } else if (this.props.value === "O") {
      sign = (
        <circle className="draw" cx="50%" cy="50%" r="40%" fill="transparent" />
      );
    }

    return (
      <button className="square" onClick={() => this.props.onClick()}>
        <svg width="100%" height="100%" stroke="white" strokeWidth="10%">
          {sign}
        </svg>
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    //const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    //const listItems = numbers.map((number) => this.renderSquare(number));

    let listItems = [];
    for (let i = 0; i < 9; i++) listItems.push(this.renderSquare(i));

    return (
      <>
        <div className="Board">{listItems}</div>
      </>
    );
  }
}

export default Board;
