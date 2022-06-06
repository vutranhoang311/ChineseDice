import React, { Component } from "react";
import { connect } from "react-redux";
import DiceOne from "../assets/img/1.png";
import DiceTwo from "../assets/img/2.png";
import DiceThree from "../assets/img/3.png";
import DiceFour from "../assets/img/4.png";
import DiceFive from "../assets/img/5.png";
import DiceSix from "../assets/img/6.png";

class Player extends Component {
  render() {
    const { dices, playerChoose,onChoose } = this.props;
    let choose = "";
    switch (playerChoose) {
      case 0:
        choose = "Hãy chọn 1 cửa";
        break;
      case 1:
        choose = "Bạn đã chọn xỉu";
        break;
      case 2:
        choose = "Bạn đã chọn tài";
        break;
      default:
        break;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            {dices.map((item, index) => {
              switch (item) {
                case 1:
                  return (
                    <div className="" key={index}>
                      <img src={DiceOne} alt={item} style={{ width: "50px" }} />
                    </div>
                  );
                case 2:
                  return (
                    <div className="" key={index}>
                      <img src={DiceTwo} alt={item} style={{ width: "50px" }} />
                    </div>
                  );
                case 3:
                  return (
                    <div className="" key={index}>
                      <img
                        src={DiceThree}
                        alt={item}
                        style={{ width: "50px" }}
                      />
                    </div>
                  );
                case 4:
                  return (
                    <div className="" key={index}>
                      <img
                        src={DiceFour}
                        alt={item}
                        style={{ width: "50px" }}
                      />
                    </div>
                  );
                case 5:
                  return (
                    <div className="" key={index}>
                      <img
                        src={DiceFive}
                        alt={item}
                        style={{ width: "50px" }}
                      />
                    </div>
                  );
                case 6:
                  return (
                    <div className="" key={index}>
                      <img src={DiceSix} alt={item} style={{ width: "50px" }} />
                    </div>
                  );
                default:
                  return item;
              }
            })}
          </div>
          <div className="col-sm-4">
            <div>
              <input
                type="radio"
                className="btn-check"
                name="BigSmall"
                id="inputBIG"
                onClick={()=>{
                    onChoose(2)
                }}
              />
              <label className="btn btn-outline-success" htmlFor="inputBIG">
                TÀI
              </label>
            </div>
          </div>
          <div className="col-sm-4 mt-3">
            <h3>{choose}</h3>
          </div>
          <div className="col-sm-4">
            <div>
              <input
                type="radio"
                className="btn-check"
                name="BigSmall"
                id="inputSmall"
                onClick={()=>{
                    onChoose(1)
                }}
              />
              <label className="btn btn-outline-danger" htmlFor="inputSmall">
                XỈU
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dices: state.chineseDice.dices,
    playerChoose: state.chineseDice.playerChoose,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChoose: (choose) => {
      const action = {
        type: "PLAYER_CHOOSE",
        choose,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
