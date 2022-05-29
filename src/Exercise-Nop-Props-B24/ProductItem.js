import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, onClick } = this.props;
    return (
      <div className="item">
        <div className="card">
          <img
            data-bs-toggle="modal"
            data-bs-target="#detailProductModal"
            src={product.image}
            className="card-img-top"
            alt={product.name}
            onClick={() => onClick(product)}
          />
          <div className="card-body">
            <h6 className="card-title">{product.name}</h6>
            <p className="card-text">{product.price} $</p>
            <a href="#" className="btn btn-primary">
              Add to carts
            </a>
          </div>
        </div>
      </div>
    );
  }
}
