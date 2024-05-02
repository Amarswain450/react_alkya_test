import React, { useState } from 'react'
import "./UserPassword.css"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useMutation } from '@tanstack/react-query';
import useStore from '../../../store';
import { login } from '../../../http/api';
import { useNavigate } from 'react-router-dom';

const UserPassword = () => {

  const navigate = useNavigate();

  const { emailData, setToken } = useStore((state) => state);

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const passwordInputHandler = (e) => {
    setPassword(e.target.value);
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      setToken(response?.data?.token);
      navigate("/");
    },
  });

  const passwordClickHandler = () => {
    if (!password) {
      return
    }
    console.log("Before API call");
    mutation.mutate({
      username: emailData,
      password: password
    });
    console.log("After API call");
  }

  return (
    <>
      <div className='user-password-container'>
        <div className='user-password-left-side'>
          <div className='step-2'>step 2</div>
          <div className='password-heading-div'>
            Create an account to <br />
            continue
          </div>
          <div className='password-para-heading'>
            You’ll be able to log in to Dingoo with this <br />
            email address and password.
          </div>
        </div>
        <div className='user-password-right-side'>
          <div className='input-heading'>
            Enter a password to create your account with
          </div>
          <div className='user-password-div'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='password-input'
              placeholder='Choose a password'
              name='password'
              value={password}
              onChange={passwordInputHandler}
            />
            {showPassword ? (
              <IoEyeOffOutline onClick={togglePasswordVisibility} className='user-password-icon' />
            ) : (
              <IoEyeOutline onClick={togglePasswordVisibility} className='user-password-icon' />
            )}
          </div>
          <div className='password-btn-div'>
            <div className='password-btn-heading'>
              Use a minimum of 6 characters (case sensitive) <br />
              with at least one number or special character.
            </div>
            <button className='password-btn-style' onClick={passwordClickHandler}>Agree & Continue</button>
          </div>
        </div>
      </div>
      <div className='password-bottom-heading'>
        Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.
      </div>
    </>
  )
}

export default UserPassword