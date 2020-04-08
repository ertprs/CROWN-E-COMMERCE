import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import history from "../../history/history";
const CartDropdown = ({ itemsArray }) => {
  const storedItems = localStorage.getItem("test");
  const displayItem = itemsArray.map((item) => {
    return (
      <div key={item.id} className="cart-item">
        <img src={item.imageUrl} alt={item.name} />
        <div className="item-details">
          <span className="name">{item.name}</span>
          <span className="price">
            {item.quantity} x ${item.price}
          </span>{" "}
        </div>
      </div>
    );
  });
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{displayItem}</div>
      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    itemsArray: state.cart.itemsArray,
  };
};
export default connect(mapStateToProps)(CartDropdown);
