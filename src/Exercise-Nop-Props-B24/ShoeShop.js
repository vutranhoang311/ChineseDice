import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";
import styles from "./ShoeShop.module.css"
export default class ShoeShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detailProduct: {},
    };
  }

  handleDetailProduct = (detailProduct) => {
    this.setState((state) => ({ detailProduct }));
  };
  render() {
    return (
      <div className={`container-fluid ${styles.backgroundGradient}`}>
        <ProductList products={data} onClick={this.handleDetailProduct} />
        
        <Modal product={this.state.detailProduct} />
      </div>
    );
  }
}
