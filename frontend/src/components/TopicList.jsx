import React, {useContext} from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import { AppContext } from 'hooks/useApplicationData';

const TopicList = (props) => {
  const { selectTopic } = useContext(AppContext)

  const topics = Array.from(props.data).map((topic, index) => <TopicListItem key={index} topic={topic} onTopicClick={selectTopic}/>)
  return (
    <div className="top-nav-bar__topic-list">
      {topics}
    </div>
  );
};

export default TopicList;