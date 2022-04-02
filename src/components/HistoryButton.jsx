import React from "react";

class HistoryButton extends React.Component {
  constructor(props, move, step) {
    super(props);

    this.state = {
      move: move,
      step: step,
    };
  }

  render() {
    let lilBoard = [];
    lilBoard.push(
      <>
        <line key="l1" className="draw" x1="33%" y1="0%" x2="33%" y2="100%" />
        <line key="l2" className="draw" x1="66%" y1="0%" x2="66%" y2="100%" />
        <line key="l3" className="draw" x1="0%" y1="33%" x2="100%" y2="33%" />
        <line key="l4" className="draw" x1="0%" y1="66%" x2="100%" y2="66%" />
      </>
    );

    for (var ix = 0; ix < 3; ix++)
      for (var iy = 0; iy < 3; iy++) {
        var id = ix + iy * 3;
        var field = this.props.step.squares[id];

        const sS = 25; // Signsize
        const ofs = 3;
        if (field === "X") {
          lilBoard.push(
            <>
              <line
                key={id + "a"}
                className="draw"
                x1={ix * 33 + ofs + "%"}
                y1={iy * 33 + ofs + "%"}
                x2={ix * 33 + ofs + sS + "%"}
                y2={iy * 33 + ofs + sS + "%"}
              />
              <line
                key={id + "b"}
                className="draw"
                x1={ix * 33 + ofs + sS + "%"}
                y1={iy * 33 + ofs + "%"}
                x2={ix * 33 + ofs + "%"}
                y2={iy * 33 + ofs + sS + "%"}
              ></line>
            </>
          );
        }

        if (field === "O") {
          const px = ix * 33 + 17;
          const py = iy * 33 + 17;
          lilBoard.push(
            <circle
              key={id}
              className="draw"
              cx={px + "%"}
              cy={py + "%"}
              r={sS / 2 + "%"}
              fill="transparent"
            />
          );
        }
      }

    let svgContent = lilBoard.map((el, id) => {
      return <g key={id}>{el}</g>;
    });

    return (
      <button className="historyButton" onClick={() => this.props.onClick()}>
        <svg className="lilBoard" stroke="black" strokeWidth="2%">
          {svgContent}
        </svg>
        <a>Jump to move {this.props.move}</a>
      </button>
    );
  }
}

export default HistoryButton;
