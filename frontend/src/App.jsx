import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import { AppProvider } from 'hooks/useApplicationData';

/** importing AppContext gives you state and some actions
 * @import { AppContext } from "hooks/useApplicationData";
 * @const { 
 * state,
 * updateToFavPhotoIds 
 * } = useContext(AppContext)
 */


/** the returned {state} object from AppContext
 * @typedef {Object} state
 * @property {Array} state.favPhotoIds
*/

/** the params and each action from from AppContext
 * @function onPhotoSelect
 * @function updateToFavPhotoIds(photoId)
 * @function onLoadTopic()
 * @function onClosePhotoDetailsModal()
*/

const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <HomeRoute/>
      </AppProvider>
    </div>
  );
};

export default App;