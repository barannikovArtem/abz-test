import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import axios from 'axios';

import './index.scss';

import UserCard from '../UserCard';


const CardList = () => {
  const [countUsersToShow, setCountUsersToShow] = useState(6)
  const [allUsersCount, setAllUsersCount] = useState(0)
  const [users, setUsers] = useState([])
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const showMoreOnClick = () => {
    if (countUsersToShow + 6 <= allUsersCount) {
      setCountUsersToShow(countUsersToShow + 6)
      setIsButtonDisabled(false)
    } else {
      setCountUsersToShow(allUsersCount)
      setIsButtonDisabled(true)
    }
  }

  const getUsersFromServer = async (count) => {
    const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`)
    .then(res => res.data)
    .then(data => {
      setUsers(data.users)
      setAllUsersCount(data.total_users)
    })
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getUsersFromServer(countUsersToShow)
  }, [countUsersToShow])

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