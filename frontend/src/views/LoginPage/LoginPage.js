import React, { useState } from 'react';
import Input from '../../components/Input';
import Tooltip from '../../components/Tooltip';
import axios from 'axios';
import {
  LoginContainer,
  LoginInputWrapper,
  LoginHeader,
  LoginButton
} from './StyledLogin';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  /**
   * Simple function to set the email state to the value of the email input field.
   */
  const emailInfo = (e) => {
    setEmail(e.target.value);
  }

  /**
   * Simple function to set the email state to the value of the password input field.
   */
  const passwordInfo = (e) => {
    setPassword(e.target.value);
  }

  const loginRequest = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3001/api/login',
      data: {
        email: email,
        password: password,
      }
    }).then(response => {
      console.log(response, 'should be good')
      window.location.assign('/profil');

    }).catch(response => {
      console.log(response, 'failed')
      setLoginError(true);
    });

  }

  return (
    <LoginContainer>
      <LoginInputWrapper>
        <LoginHeader>Logga In</LoginHeader>
        <Input placeholder='Email' onChange={emailInfo} />
        <Input placeholder='Lösenord' type='password' onChange={passwordInfo} />
          <LoginButton onClick={loginRequest}>Logga In</LoginButton>
        {loginError ? <Tooltip text='Din epost eller ditt lösenord stämde inte, prova igen' /> : null}
      </LoginInputWrapper>
    </LoginContainer>
  )
}

export default LoginPage;
