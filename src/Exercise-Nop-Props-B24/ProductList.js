import React, { Component } from "react";
import ProductItem from "./ProductItem";
export default class ProductList extends Component {

  render() {
    const { products, onClick } = this.props;
    return (
      <div className="row">
        {products.map((item) => (
          <div className="col-sm-3 my-2" key={item.id}>
            <ProductItem
              product={item}
              onClick={onClick}
            />
          </div>
        ))}
      </div>
    );
  }
}
