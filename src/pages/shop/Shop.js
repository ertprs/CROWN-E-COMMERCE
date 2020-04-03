import React, { Component } from "react";
import SHOP_DATA from "./ShopData";
import CollectionPreview from "../../components/Collection-preview/CollectionPreview";

export class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    return (
      <div>
        {this.state.collections.map(({ title, id, items }) => {
          return <CollectionPreview title={title} key={id} items={items} />;
        })}
      </div>
    );
  }
}

export default Shop;
