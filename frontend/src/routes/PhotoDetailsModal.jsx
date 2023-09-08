import React, { useContext, useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import { AppContext } from 'hooks/useApplicationData';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = () => {

  const { state, selectPhoto, scrollModal } = useContext(AppContext)
  const handleCloseButton = () => selectPhoto(null)

  useEffect(() => { // if modal open/not open change scrollbars

    let scrollY = window.scrollY;
    if (window.scrollY !== 0 && state.scrollY === 0) {return}; // fix edge case

    if (!!state.selectedPhoto) { // modal open
      scrollModal(scrollY)
      document.body.style.position = 'fixed'
      document.body.style.width = `calc(100vw - 17px)`
      document.body.style.top = `-${scrollY}px`
    } else { // modal not open
      document.body.style.position = ''
      window.scrollTo(0, state.scrollY)
    }
  }, [state.selectedPhoto])

  return (state.selectedPhoto) && (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button"
        onClick={handleCloseButton}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="modal-main-container">
        <PhotoList data={state.photoDetails} modal={'modal-main'}/>
      </div>
      <div className="modal-images-container">
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          <PhotoList data={state.photoDetails} modal={'modal-similar'}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;