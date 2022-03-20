import React from "react";

class HistoryButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        txt: "tset"
      };

  }

  

  render() {
    return (
      <button className="historyButton" >
        <div> {this.props.txt}</div>
      </button>
    );
  }
}


export default HistoryButton;