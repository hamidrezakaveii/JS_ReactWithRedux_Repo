import React from 'react';
import faker from 'faker';

const CommentDetail = props =>{
  console.log(props);
  return (
    <div className = "comment">
    <a href="/" className="avatar">
    <img alt="avatar" src = {props.avatar}/>
    </a>
    <a href="/" className="author">
    {props.auther}
    </a>
    <div className="metadata">
    <span className="date">{props.timeAgo}</span>
    </div>
    <div className="text">{faker.lorem.sentence()}</div>
    </div>
  );
} 

export default CommentDetail;