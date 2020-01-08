import React, { useEffect } from 'react';
import axios from 'axios';
import {
  ProfileContainer,
  ButtonWrapper,
  ProfileInfo,
  FindSitterButton,
  StyledImg,
  ProfileInfoText
} from './StyledProfilePage';

const ProfilePage = () => {

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/login',   
    }).then(response => {
      console.log(response, 'tjalala');
    })
  })
  
  return(
    <ProfileContainer>
      <ButtonWrapper> 
        <FindSitterButton>Hitta hundpassning</FindSitterButton>
        <FindSitterButton>Passa hund</FindSitterButton>
      </ButtonWrapper>
      <ProfileInfo>
        <StyledImg src='/images/avatar-template.png' />
        <ProfileInfoText>Epost:</ProfileInfoText>
        <ProfileInfoText>Telefon:</ProfileInfoText>
        <ProfileInfoText>Betyg:</ProfileInfoText>
        <ProfileInfoText>Beskrivning:</ProfileInfoText>
      </ProfileInfo>
    </ProfileContainer>
  )
}

export default ProfilePage;

