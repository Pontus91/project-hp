import styled from 'styled-components';
import { COLORS } from '../../constants';

export const StartPageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-image: url(/images/startpage-main-one.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const StartInfoText = styled.h1`
  font-size: 25px;
  color: ${COLORS.whiteMain};
  font-family: 'Montserrat',sans-serif;
  width: 170px;
  margin-left: 27px;
`

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 74vh;
  flex-direction: column;
`

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const LoginButton = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 20px;
  background-color: ${COLORS.mainBlue};
  border: none;
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 15px;
  &:hover{
    background-color: ${COLORS.hoverButtonColor};
    cursor: pointer;
  }
`

export const SignupButton = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 20px;
  background-color: ${COLORS.mainBlue};
  border: none;
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  &:hover{
    background-color: ${COLORS.hoverButtonColor};
    cursor: pointer;
  }
`