import React, { Component } from "react";
import { connect } from "react-redux";
class GamePlay extends Component {
  render() {
    const { score, played } = this.props;
    return (
      <div className="container">
        <h2 className="text-light fw-bold">Số bàn thắng: {score}</h2>
        <h2 className="text-light fw-bold">Tổng số bàn chơi: {played}</h2>
        <button
          className="btn btn-primary fs-5"
          onClick={this.props.onRollDice}
        >
          Lắc xí ngầu
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    score: state.chineseDice.score,
    played: state.chineseDice.played,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onRollDice: () => {
      const action = {
        type: "ROLL_DICES",
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);
