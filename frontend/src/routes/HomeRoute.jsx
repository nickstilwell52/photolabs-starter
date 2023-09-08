import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList'
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const HomeRoute = () => {
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList/>
      <PhotoDetailsModal/>
    </div>
  );
};

export default HomeRoute;
