import React from "react";

const Header = ({ onClick }) => {
  return (
    <div className="header">
      <h1>Tic Tac Toe</h1>
      <button className="btn" onClick={onClick}>
        New
      </button>
    </div>
  );
};

export default Header;
