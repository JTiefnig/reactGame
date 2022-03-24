import React from "react";

class HistoryButton extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      testval: 10,
      otherval: 11,
    };
  }

  myClick() {
    this.setState({
      testval: this.state.testval + 2,
      otherval: this.state.otherval - 1,
    });

    //this.state.testval += 2;
  }

  render() {
    return (
      <>
        <div onClick={() => this.myClick()}>
          <div>test</div>
          <div>{this.state.testval}</div>
          <div>{this.state.otherval}</div>
        </div>
      </>
=======
    
    this.state = {
        txt: "tset"
      };

  }

  

  render() {
    return (
      <button className="historyButton" >
        <div> {this.props.txt}</div>
      </button>
>>>>>>> 3bed0adc2dfd362217e0bffedffac64d41c8620d
    );
  }
}

<<<<<<< HEAD
const miniBoard = ({ move }) => {
  return (
    <div className="miniBoard">
      <h1>XO</h1>
    </div>
  );
};

export default HistoryButton;
=======

export default HistoryButton;
>>>>>>> 3bed0adc2dfd362217e0bffedffac64d41c8620d
