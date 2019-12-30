import React from 'react';
import Link from 'redux-first-router-link';
import {
  StartPageContainer,
  LoginContainer,
  SignupContainer,
  LoginButton,
  SignupButton,
} from './StyledStartPage';

const StartPage = () => {
  return (
    <StartPageContainer>
      <LoginContainer>
        <Link to='/login'>
          <LoginButton>
            Logga In
        </LoginButton>
        </Link>
      </LoginContainer>
      <SignupContainer>
        <Link to='/registrering'>
          <SignupButton>
            Registrering
        </SignupButton>
        </Link>
      </SignupContainer>
    </StartPageContainer>
  )
}

export default StartPage;
