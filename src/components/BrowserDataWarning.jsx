import { useState } from "react";

const BrowserDataWarning = ({ onAccept }) => {
  return (
    <div className="FullScreenContainer">
      <div className="WarningBox">
        <h3>Your tracker settings</h3>
        <p>
          We use cookies and similar methods to recognize visitors and remember
          their preferences. We also use them to measure ad campaign
          effectiveness, target ads and analyze site traffic.
        </p>
        <br></br>
        <p>
          By clicking accept, you consent to the processing of your data by us
          and third parties using the above methods. You can always change your
          tracker preferences by visiting our Cookie Policy.
        </p>
        <button className="btn" onClick={() => onAccept(true)}>
          ACCEPT
        </button>
        <button className="btn" onClick={() => onAccept(false)}>
          REJECT
        </button>
      </div>
    </div>
  );
};

export default BrowserDataWarning;
