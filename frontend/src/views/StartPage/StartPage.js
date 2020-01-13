import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

  const [loggedIn, setLoggedIn] = useState(false);
  /**
  * If user is online we set userLink to true so you can easy access your profile.
  */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:3001/api/login',
    }).then(response => {
      if (response.data.status === 'not logged in') {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
    })
  }, [])

  return (
    <StartPageContainer>
      {loggedIn ?
        <LoginContainer>
          <StartInfoText>
            Få enkel hundpassning, eller passa en hund själv!
        </StartInfoText>
        </LoginContainer> :
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
        </LoginContainer>}
      <SignupContainer>
      </SignupContainer>
    </StartPageContainer>
  )
}

export default StartPage;
