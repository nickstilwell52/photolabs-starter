import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topicId = props.topic.id
  const handleTopicClick = () => props.onTopicClick(topicId)
  return (
    <div className="topic-list__item" onClick={handleTopicClick}>
      <span>{props.topic.title}</span>
    </div>
  );
};

export default TopicListItem;
