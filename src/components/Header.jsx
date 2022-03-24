import React from "react";


const Header = ({ text, onClick }) => {
  const btnclick = (e) => onClick(e);

  return (
    <div className="header">
      <h1>{text}</h1>
      <button className="btn" onClick={btnclick}>
        NEW
      </button>
    </div>
  );
};

export default Header;
