import React, { Component } from "react";
import GamePlay from "./GamePlay";
import Player from "./Player";
import Pony from "./Pony.ttf";
import styles from "./ChineseDice.module.css";
export default class ChineseDice extends Component {
  render() {
    return (
      <div className={`${styles.background} container-fluid py-5`}>
        <h1 className="text-dark fw-bold">Game xí ngầu tài xỉu</h1>
        <p>
          Luật chơi: đặt cửa Tài hoặc Xỉu, sau đó lắc xí ngầu. Tổng số nút trên
          11 là Tài thắng, từ 10 trở xuống là Xỉu thắng{" "}
        </p>
        <Player />
        <GamePlay />
      </div>
    );
  }
}
