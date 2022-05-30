import React, { Component } from "react";
import styles from "./ProductItem.module.css";
export default class ProductItem extends Component {
  render() {
    const { product, onClick } = this.props;
    return (
      <div className={`item ${styles.item}`}>
        <div className={`${styles.card} card`}>
          <img
            data-bs-toggle="modal"
            data-bs-target="#detailProductModal"
            src={product.image}
            className={`${styles.img} card-img-top`}
            alt={product.name}
            onClick={() => onClick(product)}
          />
          <h6
            className={`${styles.cardTitle} text-center card-title fw-bold fs-4`}
          >
            {product.name}
          </h6>
          <span
            className={`${styles.cardText} text-center card-text fw-bold fs-4 text-light`}
          >
            $ {product.price}
          </span>
          <div className={`card-body ${styles.cardBody}`}>
            <div className={`card-size ${styles.cardFlex} m-2`}>
              <p className="fw-bold m-0  me-2">Size: </p>
              <span className={styles.spanSize}>6</span>
              <span className={styles.spanSize}>7</span>
              <span className={styles.spanSize}>8</span>
              <span className={styles.spanSize}>9</span>
            </div>
            <div className={`card-color ${styles.cardFlex} m-2`}>
              <p className="fw-bold  m-0 me-2">Color: </p>
              <span className={styles.redDot}></span>
              <span className={styles.blackDot}></span>
              <span className={styles.greenDot}></span>
            </div>
            <a href="#" className="btn btn-success fw-bold">
              Add to carts
            </a>
          </div>
        </div>
      </div>
    );
  }
}
