import React, { useContext } from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { AppContext } from "hooks/useApplicationData";

const PhotoListItem = (props) => {
  const { state, updateToFavPhotoIds, selectPhoto } = useContext(AppContext)
  const handlePhotoClick = () => selectPhoto(props.location, props.urls, props.user, props.similar_photos, props.id);
  return (
    <div className={`${props.listType}__item`}>
        <PhotoFavButton state={state} updateToFavPhotoIds={updateToFavPhotoIds} id={props.id}/>
      <img className={`${props.listType}__image`}
        src={props.urls.full}
        onClick={handlePhotoClick}
      />
      <div className={`${props.listType}__user-details`}>
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
