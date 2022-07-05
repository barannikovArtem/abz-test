import axios from 'axios';
import React, { useEffect, useState } from 'react';

import './index.scss';

const RegisterForm = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [token, setToken] = useState('')
  const [positions, setPositions] = useState([])
  const [positionId, setPositionId] = useState(0)
  const [imageUploaded, setImageUploaded] = useState()

  const onChangeHandle = (e) => {
    switch (e.target.name) {
      case 'name':
        setUserName(e.target.value);
        break;

      case 'email':
        setUserEmail(e.target.value)
        break;

      case 'phone':
        setUserPhone(e.target.value)
        break;

      default:
        break;
    }
  }

  const resetForm = () => {
    setUserName('')
    setUserEmail('')
    setUserPhone('')
    setToken('')
    setPositionId(0)
  }

  const getPositionsFromServer = async () => {
    const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    .then(res => res.data)
    .then(data => {
      setPositions(data.positions);
    })
    .catch(err => console.log(err))
  }

  const getTokenFromServer = async () => {
    const response = await axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/token`)
    .then(res => res.data)
    .then(data => {
      setToken(data.token)
    })
    .catch(err => console.log(err))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headerConfig = {
      headers: {
      "Token": token,
      'Content-Type': 'multipart/form-data',
      }
    }
    const userInfo = {
      "name": userName,
      "email": userEmail,
      "phone": userPhone,
      "position_id": positionId,
      "photo": imageUploaded,
    }
    try {
      axios.post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, userInfo, headerConfig)
        .then(data => {
          console.log(data);
          resetForm();
        })
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getPositionsFromServer();
    getTokenFromServer();
  }, [])

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className='form__title'>Working with POST request</h2>
        <div>
          <label>
            <input
              type="string"
              className="form__input"
              name="name"
              placeholder="Your Name"
              value={userName}
              onChange={onChangeHandle}
            />
          </label>
          <span className="help-block"></span>
        </div>
        <div>
          <label>
            <input
              type="email"
              className="form__input"
              name="email"
              placeholder="Email"
              value={userEmail}
              onChange={onChangeHandle}
              />
          </label>
          <span className="help-block"></span>
        </div>
        <div>
          <input
            type="phone"
            className="form__input form__input--phone"
            name="phone"
            placeholder="Phone"
            value={userPhone}
            onChange={onChangeHandle}
          />
          <span></span>
        </div>
        <div>
          <span className="help-block"></span>
        </div>
        <div >
          <span className="help-block"></span>
        </div>
        <div className='form__position-container'>
          <p className='form__position-title'>Select your position</p>
          { 
            positions.map((position) => {
              return (
                <label key={position.name} className="form__position-label">
                  {position.name}
                  <input type="radio" name='position' value={position.id} onClick={(e) => setPositionId(e.target.value)} />
                </label>
              )
            })
          }
        </div>
        <div className='form__file-container'>
          <label>
            <input type="file" className='form__file-picker' onChange={(e) => {
              setImageUploaded(e.target.files[0])
            }}/>
            <span>
              Upload
            </span>
            <span className={`form__file${imageUploaded ? '--loaded' : ''}`}></span>
          </label>
        </div>
        <button>
          sign up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;