import React, { Component } from "react";
import styles from "./Modal.module.css";
export default class Modal extends Component {
  render() {
    const { product } = this.props;
    return (
      <div
        className="modal fade"
        id="detailProductModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className={`${styles.darkTheme} modal-content`}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {product.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className={`${styles.darkTheme} modal-body`}>
              <div className={`${styles.darkTheme} card`}>
                <img
                  src={product.image}
                  className={`${styles.darkTheme} ${styles.img} card-img-top`}
                  alt={product.name}
                />
                <div className="card-body">
                  <p className="card-text">{product.price} $</p>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
