import React, { Component } from 'react'
import ProductItemCart from './ProductItemCart';

export default class ProductListCart extends Component {
  showProductList = () => {
    let { productList, addToCart } = this.props;
    return productList.map((product) => {
      let { id } = product;
      return <div className="col-3 mt-3" key={`shoes${id}`}>
        <ProductItemCart addToCart={addToCart} product={product} />
      </div>
    })
  }
  render() {
    return (
      <div className="row">
        {this.showProductList()}
      </div>
    )
  }
}
