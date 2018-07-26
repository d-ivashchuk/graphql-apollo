import React from 'react';

const user = props => (
  <div>
    <p>
      {props.user.firstName} {props.user.lastName}
    </p>
    <img src={props.user.avatar} alt="" />
  </div>
);

export default user;
