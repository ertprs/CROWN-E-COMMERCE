import React, { Component } from "react";
import CollectionPreview from "../../components/Collection-preview/CollectionPreview";
import { connect } from "react-redux";
import { fetchItemsFromFirebase } from "../../actions/shopAction";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/Firebase";
import Spinner from "../../components/spinner/Spinner";

export class Shop extends Component {
  constructor(props) {
    super(props);
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      props.fetchItemsFromFirebase(collectionsMap);
    });
  }

  render() {
    if (this.props.collections.length > 0) {
      return (
        <div>
          {this.props.collections.map(({ title, id, items }) => {
            return <CollectionPreview title={title} key={id} items={items} />;
          })}
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    collections: state.shop.collections,
  };
};
export default connect(mapStateToProps, { fetchItemsFromFirebase })(Shop);
