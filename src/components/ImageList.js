import './ImageList.css'
import React from "react";

const ImageList = props => {
  return (
    <div className="image-list">
      {props.images.map(({description, id, urls}) => {
        return <img key={id} src={urls.regular} alt={description} />;
      })}
    </div>
  );
};

export default ImageList;
