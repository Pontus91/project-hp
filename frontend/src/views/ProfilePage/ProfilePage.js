import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'redux-first-router-link';
import {
  ProfileContainer,
  ButtonWrapper,
  ProfileInfo,
  FindSitterButton,
  StyledImg,
  ProfileInfoText,
  LogOutButton,
  DescContainer,
  DescText,
  DescInfoText
} from './StyledProfilePage';

const ProfilePage = () => {

  const loginInfo = useSelector(state => state.userReducer.userState);
  const dispatch = useDispatch();

  /**
   * UseEffect Hook to get userdata and set it to redux state.
   * Also if a user is not logged in it redirects to the startpage instantly.
   */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:3001/api/login',
    }).then(response => {
      if (response.data.status === 'not logged in') {
        window.location.assign('/');
      } else {
        let data = { ...response.data }
        dispatch({ type: 'UPDATE_USER', value: data })
      }
    })
  }, [dispatch])

  /**
   * Logout function that logout the user and redirect the user to the startpage.
   */
  const logout = () => {
    axios({
      method: 'delete',
      withCredentials: true,
      url: 'http://localhost:3001/api/login'
    }).then(response => {
      window.location.assign('/');
    })
  }

  return (
    <ProfileContainer>
      <ButtonWrapper>
        <Link to='/hundpassning'>
          <FindSitterButton>Hitta hundpassning</FindSitterButton>
        </Link>
        <Link to='/passa-hund'>
          <FindSitterButton>Passa hund</FindSitterButton>
        </Link>
        <Link to='/hundar-jag-passar'>
          <FindSitterButton>Hundar jag passar</FindSitterButton>
        </Link>
        <Link to='/min-hunds-passningar'>
          <FindSitterButton>Min hunds passningar</FindSitterButton>
        </Link>
      </ButtonWrapper>
      <ProfileInfo>
        <StyledImg src='/images/avatar-template.png' />
        <ProfileInfoText>Epost: {loginInfo.email} </ProfileInfoText>
        <ProfileInfoText>Telefon: 0{loginInfo.phone} </ProfileInfoText>
        <DescInfoText>Beskrivning </DescInfoText>
        <DescContainer>
          <DescText>
            {loginInfo.description}
          </DescText>
        </DescContainer>
        <ProfileInfoText>Betyg:</ProfileInfoText>
        <LogOutButton onClick={logout}>Logga ut</LogOutButton>
      </ProfileInfo>
    </ProfileContainer>
  )
}

export default ProfilePage;

