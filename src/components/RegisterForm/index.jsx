import React from 'react';

import './index.scss';

const RegisterForm = () => {
  return (
    <div className="form">
      <form className="registrationForm">
        <h2>Working with POST request</h2>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            type="string"
            className="form-control"
            name="full_name"
            placeholder="Full Name"
          />
          <span className="help-block"></span>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email address"
          />
          <span className="help-block"></span>
        </div>
        <div>
          <label htmlFor="phone">Phone(enter only 10 digit number)</label>
          <input
            type="phone"
            className="form-control"
            name="phone"
            placeholder="Phone Number"
          />
          <span></span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
          />
          <span className="help-block"></span>
        </div>
        <div >
          <label htmlFor="password_confirmation">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            name="password_confirmation"
          />
          <span className="help-block"></span>
        </div>
        <button className="btn btn-primary">
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;