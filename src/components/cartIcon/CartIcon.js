import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/CartIcon.svg";
import { connect } from "react-redux";
const CartIcon = ({ onClick, itemCount }) => {
  return (
    <div className="cart-icon" onClick={onClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    itemCount: state.cart.itemCount,
  };
};
export default connect(mapStateToProps)(CartIcon);
