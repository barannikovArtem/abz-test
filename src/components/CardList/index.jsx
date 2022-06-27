import React, { useState } from 'react';

import './index.scss';

const CardList = () => {
  const [users, serUsers] = useState([])
  return (
    <div className='card-list'>
      <div className="container">
        <h2 className="card-list__title">
          Working with GET request
        </h2>
      </div>
    </div>
  );
};

export default CardList;