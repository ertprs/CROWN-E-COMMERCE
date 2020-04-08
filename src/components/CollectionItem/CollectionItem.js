import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addItem, updateItemCount } from "../../actions/cartActions";
import React, { Component } from "react";

export class CollectionItem extends Component {
  test = () => {
    const { name, price, imageUrl, addItem, updateItemCount, id } = this.props;
    let storedItems = localStorage.getItem("test");
    let itemCountLocal;
    if (storedItems) {
      itemCountLocal = JSON.parse(storedItems).length + 1;
    } else {
      storedItems = [];
    }
    if (!itemCountLocal) {
      itemCountLocal = 1;
    }
    updateItemCount(itemCountLocal);
    return addItem({ name, price, imageUrl, id });
  };
  render() {
    const { name, price, imageUrl } = this.props;
    return (
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>

        <CustomButton inverted className="custom-button" onClick={this.test}>
          ADD TO CART
        </CustomButton>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemCount: state.cart.itemCount,
  };
};
export default connect(mapStateToProps, { addItem, updateItemCount })(
  CollectionItem
);

// const CollectionItem = ({
//   name,
//   price,
//   imageUrl,
//   addItem,
//   updateItemCount,
//   id,
// }) => {
//   const test = () => {
//     let storedItems = localStorage.getItem("test");
//     let itemCountLocal;
//     if (storedItems) {
//       itemCountLocal = JSON.parse(storedItems).length + 1;
//     } else {
//       storedItems = [];
//     }
//     if (!itemCountLocal) {
//       itemCountLocal = 1;
//     }
//     updateItemCount(itemCountLocal);
//     return addItem({ name, price, imageUrl, id });
//   };
//   return (
//     <div className="collection-item">
//       <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

//       <div className="collection-footer">
//         <span className="name">{name}</span>
//         <span className="price">{price}</span>
//       </div>

//       <CustomButton inverted className="custom-button" onClick={test}>
//         ADD TO CART
//       </CustomButton>
//     </div>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     itemCount: state.cart.itemCount,
//   };
// };
// export default connect(mapStateToProps, { addItem, updateItemCount })(
//   CollectionItem
// );
