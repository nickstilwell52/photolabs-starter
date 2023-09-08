import React, { useContext } from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from 'components/TopicList';
import FavBadge from './FavBadge';

import { AppContext } from "hooks/useApplicationData";


const TopNavigationBar = () => {
  const { state } = useContext(AppContext)

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList data={state.topicData}/>
      <FavBadge isFavPhotoExist={!!state.favPhotoIds.length}/>
    </div>
  )
}

export default TopNavigationBar;