import React, { Component } from "react";
import { connect } from "react-redux";
import ItemPreview from "../../components/itemPreview/ItemPreview";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/Firebase";
import { fetchItemsFromFirebase } from "../../actions/shopAction";

export class ShopItem extends Component {
  constructor(props) {
    super(props);
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      props.fetchItemsFromFirebase(collectionsMap);
    });
  }
  unSubscribeFromSnapshot = null;

  render() {
    if (this.props.section) {
      const { title, id, items } = this.props.section;
      return (
        <div>
          <ItemPreview title={title} key={id} items={items} />;
        </div>
      );
    } else {
      return null;
    }
  }
}

const checkSectionId = {
  mens: 0,
  sneakers: 1,
  jackets: 2,
  womens: 3,
  hats: 4,
};
const mapStateToProps = (state, ownProps) => {
  let param = ownProps.match.params.sectionId;
  param = checkSectionId[param];
  return {
    section: state.shop.collections[param],
  };
};

export default connect(mapStateToProps, { fetchItemsFromFirebase })(ShopItem);
