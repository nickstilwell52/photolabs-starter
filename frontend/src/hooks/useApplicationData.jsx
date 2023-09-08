import React, { useReducer, useEffect, createContext } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  PHOTO_DETAILS: 'PHOTO_DETAILS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SCROLL: 'SCROLL',
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
    case ACTIONS.SET_PHOTO_DATA: 
      return {
        ...state, photoData: action.value, photoDataByTopic: action.value
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
      ...state, topicData: action.value
      };
    case ACTIONS.SELECT_PHOTO:
      return {
      ...state, selectedPhoto: action.value
      };
    case ACTIONS.PHOTO_DETAILS: 
      return {
      ...state, photoDetails: action.value
      };
    case ACTIONS.SELECT_TOPIC:
      return {
      ...state, selectedTopic: action.value
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS: 
      if (action.value === 0) {
        return {
          ...state, photoDataByTopic: state.photoData
        };
      } else {
        return {
          ...state, photoDataByTopic: action.value
        };
      }
    case ACTIONS.SCROLL: 
      return {
      ...state, scrollY: action.value
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  favPhotoIds: [],
  selectedPhoto: null,
  selectedTopic: 1,
  photoDetails: {},
  photoData: [],
  photoDataByTopic: [],
  topicData: [],
  scrollY: 0,
}

export const AppContext = createContext(); // state/actions

export function AppProvider({ children }) {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos").then(response => response.json())
    .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data }))
  }, [])

  useEffect(() => {
    fetch("/api/topics").then(response => response.json())
    .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, value: data }))
  }, [])

  const updateToFavPhotoIds = (id) => {
    if (!state.favPhotoIds.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: id })
    } else
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: id })
  }
  const selectPhoto = (location, urls, user, similar_photos, id ) => {
    if (id) {
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: id })
      dispatch({ type: ACTIONS.PHOTO_DETAILS,
                 value: { location, urls, user, similar_photos, id }})
    } else {
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: null })
      dispatch({ type: ACTIONS.PHOTO_DETAILS, value: null })
    }
  }
  const selectTopic = (topic) => {
    if (state.selectedTopic !== topic) {
      dispatch({ type: ACTIONS.SELECT_TOPIC, value: topic })
      getPhotosByTopics(topic)
    }
    else {
      dispatch({ type: ACTIONS.SELECT_TOPIC, value: 0 })
      getPhotosByTopics(0)
    }
  }

  const getPhotosByTopics = (topic) => {
    if (topic !== 0) {
      fetch(`/api/topics/photos/${topic}`).then(response => response.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, value: data }))
    } else {
      dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, value: state.photoData })
    }
  }

  const scrollModal = (scrollY) => {
      dispatch({ type: ACTIONS.SCROLL, value: scrollY})
  }

  return (
    <AppContext.Provider value={{state, updateToFavPhotoIds, selectPhoto, selectTopic, scrollModal}}>
      {children}
    </AppContext.Provider>)
}

