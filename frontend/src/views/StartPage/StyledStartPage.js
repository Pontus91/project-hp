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

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 90vh;

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
  border-radius: 7px;
  background-color: ${COLORS.mainGreen};
  border: none;
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  &:hover{
    background-color: #45bf18;
  }
`

export const SignupButton = styled.button`
  width: 160px;
  height: 40px;
  border-radius: 7px;
  background-color: ${COLORS.mainGreen};
  border: none;
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  &:hover{
    background-color: #45bf18;
  }
`