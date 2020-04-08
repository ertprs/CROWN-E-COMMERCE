import React, { Component } from "react";
import CollectionPreview from "../../components/Collection-preview/CollectionPreview";
import { connect } from "react-redux";

export class Shop extends Component {
  render() {
    return (
      <div>
        {this.props.collections.map(({ title, id, items }) => {
          return <CollectionPreview title={title} key={id} items={items} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    collections: state.shop.collections,
  };
};
export default connect(mapStateToProps)(Shop);
