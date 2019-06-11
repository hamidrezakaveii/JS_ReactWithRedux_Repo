import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return (

  <div className= "ui container comments">
  <ApprovalCard>
    <h4>Warning!</h4>
    <div>Are you sure you?</div>
  </ApprovalCard>
      <ApprovalCard >
      <CommentDetail auther= "Hami" timeAgo="Today at 6:00" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail auther= "Pierre" timeAgo="Yesterday at 9:00" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail auther= "Sam" timeAgo="Yesterday at 5:00" avatar={faker.image.avatar()}/>
      </ApprovalCard>
  </div>
    
    );

}


ReactDOM.render(
<App />
  ,document.querySelector('#root') );