import React from 'react';

const UserCard = ({user}) => {
  const {name, position, email, phone} = user

  return (
      <div className='user-card'>
        <p className="user-card__name">
          {name}
        </p>
        <p className="user-card__position">
          {position}
        </p>
        <p className="user-card__email">
          {email}
        </p>
        <p className="user-card__phone">
          {phone}
        </p>
      </div>
  );
};

export default UserCard;