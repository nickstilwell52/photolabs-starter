import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';


const App = () => {
  return (
    <div className="App">
        <HomeRoute/>
    </div>
  );
};

export default App;

// ############################

/** importing AppContext gives you state and some actions
 * @import { AppContext } from "hooks/useApplicationData";
 * @const { 
 * state,
 * actions,
 * } = useContext(AppContext)
 */


/** the returned {state} object from AppContext
 * @typedef {Object} state.
 * .favPhotoIds []
 * .selectedPhoto number
 * .selectedTopic number
 * .photoDetails {}
 * .photoData []
 * .photoDataByTopic []
 * .topicData []
 * .scrollY number
*/

/** the params and each action from from AppContext
 * @function updateToFavPhotoIdsid()
 * @function selectPhoto(location, urls, user, similar_photos, id)
 * @function selectTopic(topic)
 * @function scrollModal(scrollY)
*/