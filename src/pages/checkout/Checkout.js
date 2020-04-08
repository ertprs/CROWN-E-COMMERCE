import React, { Component } from "react";
import { connect } from "react-redux";
import {
  cartToggleDropdownInCheckout,
  removeItemInCheckout,
  addItem,
  removeItem,
} from "../../actions/cartActions";
import "./checkout.scss";
export class Checkout extends Component {
  componentDidMount() {
    this.props.cartToggleDropdownInCheckout();
  }
  addItemQuantity = (quantity) => {
    const test = this.props.itemsArray.map((item) => {
      return { ...item, quantity: quantity + 1 };
    });
    console.log(test);
  };
  subtractItemQuantity = (quantity) => {
    const test = this.props.itemsArray.map((item) => {
      return { ...item, quantity: quantity - 1 };
    });
    console.log(test);
  };
  renderTotalPrice = () => {
    const price = this.props.itemsArray.map((item) => {
      return item.price * item.quantity;
    });
    return price.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };
  renderItemsArray = () => {
    return this.props.itemsArray.map((item) => {
      return (
        <div key={item.id} className="checkout-item">
          <div className="image-container">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <span className="name">{item.name}</span>
          <span className="quantity">
            <div className="arrow" onClick={() => this.props.removeItem(item)}>
              &#10094;
            </div>
            <span className="value">{item.quantity}</span>
            <div className="arrow" onClick={() => this.props.addItem(item)}>
              &#10095;
            </div>
          </span>
          <span className="price">{item.price}</span>
          <div
            className="remove-button"
            onClick={() => this.props.removeItemInCheckout(item.id)}
          >
            &#10008;
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {this.renderItemsArray()}
        <div className="total">Total : ${this.renderTotalPrice()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemsArray: state.cart.itemsArray,
  };
};
export default connect(mapStateToProps, {
  cartToggleDropdownInCheckout,
  removeItemInCheckout,
  addItem,
  removeItem,
})(Checkout);
