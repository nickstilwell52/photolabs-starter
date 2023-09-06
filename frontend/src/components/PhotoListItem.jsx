import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { AppContext } from "hooks/useApplicationData";

const PhotoListItem = (props) => {
  const { state, updateToFavPhotoIds } = useContext(AppContext)
  return (
    <div className="photo-list__item">
        <PhotoFavButton state={state} updateToFavPhotoIds={updateToFavPhotoIds} id={props.id}/>
      <img className="photo-list__image" src={props.urls.full}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.user.profile}/>
        <div className="photo-list__user-info">
          {props.user.name}
          <div className="photo-list__user-location">
            {props.location.city} {props.location.country}
          </div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
