import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  
  const { state, updateToFavPhotoIds, id } = props
  const handleClick = () => updateToFavPhotoIds(id);

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={!!state.favPhotoIds.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;