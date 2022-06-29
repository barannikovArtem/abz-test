import React from 'react';

import './index.scss';

const UserCard = ({user}) => {
  const {name, position, email, phone, photo} = user

  return (
      <div className='user-card'>
        <img className='user-card__image' src={photo} alt="user-photo" />
        <p className="user-card__name">
          {name}
        </p>
        <div className="user-card__info">
          {position}
          <br/>
          {email}
          <br/>
          {phone}
        </div>
      </div>
  );
};

export default UserCard;