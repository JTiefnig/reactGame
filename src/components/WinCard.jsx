const BrowserDataWarning = ({ winner, onOk }) => {
  const renderwinner = (w) => {
    if (w === "X") return <svg></svg>;
    if (w === "O") return <svg></svg>;
    if (w === "Draw") return <svg></svg>;
  };

  return (
    <div className="FullScreenContainer">
      <div className="WarningBox">
        {(winner) => renderwinner(winner)}
        <p>{Winner}</p>
        <button className="btn">DONE</button>
      </div>
    </div>
  );
};
