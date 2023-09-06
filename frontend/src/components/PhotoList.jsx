import React from "react";

import "../styles/PhotoList.scss";
import mockData from '../mocks/photos';
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const photos = mockData.map(photo => {
    return (
      <PhotoListItem
        key={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
        id={photo.id}
    />)
  })
  return (
    <ul className="photo-list">
    {photos}
    </ul>);
};

export default PhotoList;