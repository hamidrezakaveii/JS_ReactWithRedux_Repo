import React from 'react';



const ApprovalCard = props => {
return (
<div className="ui card">
<div className="content"></div>
<div calssName="content">{props.children}</div>
<div className="extra content">
<div className="ui two buttons">
<div className="ui green button">Accept</div>
<div className="ui red button">Reject</div>
</div>

</div>

</div>

);
};

export default ApprovalCard;