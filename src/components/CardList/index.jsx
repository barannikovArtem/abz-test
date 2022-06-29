import React, { useEffect, useState } from 'react';

import './index.scss';

import { getUsersFromServer } from '../../api';
import UserCard from '../UserCard';


const CardList = () => {
  const [count, setCount] = useState('6')
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    getUsersFromServer(count, setUsers)
  }, [])


  return (
    <div className='card-list'>
      <div className="container">
        <h2 className="card-list__title">
          {console.log(users)}
          Working with GET request
        </h2>
        {users.map(user => {
          return (
            <UserCard user={user} key={user.id} />
          )
        })}
      </div>
    </div>
  );
};

export default CardList;