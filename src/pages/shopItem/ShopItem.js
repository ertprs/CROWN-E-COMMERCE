import React, { Component } from "react";
import { connect } from "react-redux";
import ItemPreview from "../../components/itemPreview/ItemPreview";

export class ShopItem extends Component {
  render() {
    const { title, id, items } = this.props.section;
    return (
      <div>
        <ItemPreview title={title} key={id} items={items} />;
      </div>
    );
  }
}

const checkSectionId = {
  hats: 0,
  sneakers: 1,
  jackets: 2,
  womens: 3,
  mens: 4,
};
const mapStateToProps = (state, ownProps) => {
  let param = ownProps.match.params.sectionId;
  param = checkSectionId[param];
  return {
    section: state.shop.collections[param],
  };
};

export default connect(mapStateToProps)(ShopItem);
