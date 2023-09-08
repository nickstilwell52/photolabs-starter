import React, { useContext } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import { AppContext } from "hooks/useApplicationData";

const PhotoList = (props) => {

  // for which component was PhotoList called for?
  const listType = (!props.modal) ? 'photo-list' : props.modal === 'modal-main' ? 'modal-main' : 'modal-similar';

  const { state } = useContext(AppContext)

  const generatePhotoList = () => {

    if (listType === 'photo-list') {
      return state.photoDataByTopic
    }

    // if Photolist was called with modal, use the photo that was clicked
    const modalPhoto = state.photoDataByTopic.find(p => p.id === props.data.id);

    if (listType === 'modal-main') {
      return Array(modalPhoto)

    } else if (listType === 'modal-similar') {
      return (Object.values(modalPhoto.similar_photos))
    }
  }

  // create an Array from generatePhotoList
  const photoArray = generatePhotoList()
  // this is either: all homepage photos, the large modal photo, or the large modals similar photos
  const photos = photoArray.map(photo => {
    return (
      <PhotoListItem
        key={photo.id}
        location={photo.location}
        urls={photo.urls}
        user={photo.user}
        id={photo.id}
        similar_photos={photo.similar_photos}
        listType={listType}
    />)
  })

  // return a different className depending on what the photoList was called for so it can be styled appropriately


if (listType !== 'modal-main') {
  return (
    <ul className={`${listType}`}>
    {photos}
    </ul>)
} else {
  return  (
    <>{photos}</>
  )}
}


export default PhotoList;