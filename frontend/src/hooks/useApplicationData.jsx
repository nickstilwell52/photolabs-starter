import React, { useReducer, useEffect, createContext, useContext } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state, favPhotoIds: [...state.favPhotoIds, action.value]
    };
    case ACTIONS.FAV_PHOTO_REMOVED:
      const newFavs = state.favPhotoIds.filter(fav => fav !== action.value);
      return {
        ...state, favPhotoIds: newFavs
    };
    case ACTIONS.SET_PHOTO_DATA: return {

    };
    case ACTIONS.SET_TOPIC_DATA: return {

    };
    case ACTIONS.SELECT_PHOTO: return {

    };
    case ACTIONS.DISPLAY_PHOTO_DETAILS: return {

    };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favPhotoIds: [],
}

export const AppContext = createContext(); // state

export function AppProvider({ children }){

  const [state, dispatch] = useReducer(reducer, initialState); // actual state

  const updateToFavPhotoIds = (photoId) => {
    if (!state.favPhotoIds.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: photoId })
    } else
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: photoId })
  }

  return (
    <AppContext.Provider value={{state, updateToFavPhotoIds}}>
      {children}
    </AppContext.Provider>)
}

