import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../CollectionItem/CollectionItem";
const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, name, price, imageUrl }) => {
            return (
              <CollectionItem
                key={id}
                name={name}
                price={price}
                imageUrl={imageUrl}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
