const WinText = ({ winner }) => {
  if (winner === "Draw") {
    return <h2>Draw</h2>;
  }
  return <h2>WON</h2>;
};

const WinCard = ({ winner, onOk }) => {
  const renderwinner = (win) => {
    const w = 100;
    const h = 100;
    const xSign = (
      <svg width={w} height={h}>
        <line
          className="draw"
          x1="10%"
          y1="10%"
          x2="90%"
          y2="90%"
          stroke="black"
          strokeWidth="10%"
        />
        <line
          className="draw"
          x1="90%"
          y1="10%"
          x2="10%"
          y2="90%"
          stroke="black"
          strokeWidth="10%"
        />
      </svg>
    );
    const oSign = (
      <svg width={w} height={h}>
        <circle
          className="draw"
          cx="50%"
          cy="50%"
          r="40%"
          fill="transparent"
          stroke="black"
          strokeWidth="10%"
        />
      </svg>
    );
    if (win === "X") return xSign;
    if (win === "O") return oSign;
    if (win === "Draw")
      return (
        <>
          {xSign}
          {oSign}
        </>
      );
  };

  return (
    <div className="FullScreenContainer">
      <div className="WinnerBox fadeIn-bottom">
        <div>{renderwinner(winner)}</div>
        <WinText winner={winner}></WinText>
        <button className="btn" onClick={onOk}>
          NEW GAME
        </button>
      </div>
    </div>
  );
};

export default WinCard;
