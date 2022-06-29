import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import './index.scss';

import { getUsersFromServer } from '../../api';
import UserCard from '../UserCard';


const CardList = () => {
  const [count, setCount] = useState(6)
  const [allUsersCount, setAllUsersCount] = useState(0)
  const [users, setUsers] = useState([])
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const showMoreOnClick = () => {
    if (count + 6 <= allUsersCount) {
      setCount(count + 6)
      setIsButtonDisabled(false)
    } else {
      setCount(allUsersCount)
      setIsButtonDisabled(true)
    }
  }
  
  useEffect(() => {
    getUsersFromServer(count, setUsers, setAllUsersCount)
  }, [count])

  return (
    <div className='card-list'>
      <div className="container">
        <h2 className="card-list__title">
          Working with GET request
        </h2>
        {users.map(user => {
          return (
            <UserCard user={user} key={user.id} />
          )
        })}
        <button 
          type='button'
          disabled={isButtonDisabled}
          className={classNames(
            "card-list__btn",
            {'card-list__btn--disabled': isButtonDisabled}
          )}
          onClick={showMoreOnClick}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default CardList;