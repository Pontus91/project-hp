import React from 'react';
import Link from 'redux-first-router-link';
import {
  StartPageContainer,
  LoginContainer,
  SignupContainer,
  LoginButton,
  SignupButton,
  StartInfoText
} from './StyledStartPage';

const StartPage = () => {
  return (
    <StartPageContainer>
      <LoginContainer>
        <StartInfoText>
          Få enkel hundpassning, eller passa en hund själv!
        </StartInfoText>
        <Link to='/login'>
          <LoginButton>
            Logga In
        </LoginButton>
        </Link>
        <Link to='/registrering'>
          <SignupButton>
            Registrering
        </SignupButton>
        </Link>
      </LoginContainer>
      <SignupContainer>
      </SignupContainer>
    </StartPageContainer>
  )
}

export default StartPage;
