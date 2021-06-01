import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setSignInData({ email: '', password: '' });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setSignInData({ ...signInData, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={signInData.email}
          label='email'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={signInData.password}
          label='password'
          handleChange={handleChange}
          required
        />
        <CustomButton type='submit' value='Submit form'> Sign in </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
