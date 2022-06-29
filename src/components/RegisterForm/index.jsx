import React from 'react';

import './index.scss';

const RegisterForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <h2>Working with POST request</h2>
        <div>
          <label>
            <input
              type="string"
              className="form__input"
              name="name"
              placeholder="Your Name"
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
              />
          </label>
          <span className="help-block"></span>
        </div>
        <div>
          <label>
            <input
              type="phone"
              className="form__input"
              name="phone"
              placeholder="Phone"
            />
          </label>
          <span></span>
        </div>
        <div>
          <label>
          </label>
          <span className="help-block"></span>
        </div>
        <div >
          <label>

          </label>
          <span className="help-block"></span>
        </div>
        <button className="btn btn-primary">
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;