import styled from 'styled-components';
import { COLORS } from '../../constants';

export const ProfileContainer = styled.div`
  height: 74vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.whiteMain};
`

export const ButtonWrapper = styled.div`
  flex: 1;
  background-color: ${COLORS.mainGreen};
  width: 100%;
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

export const ProfileInfo = styled.div`
  flex: 1;
  background-color: ${COLORS.mainGreen};
  width: 100%;
  height: 100%
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FindSitterButton = styled.button`
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

export const StyledImg = styled.img`
@media (max-width: 576px){
  width: 80px;
  height: 80px;
}
`
export const ProfileInfoText = styled.p`
  font-size: 16px;
  color: ${COLORS.whiteMain};
  font-family: 'Montserrat', sans-serif;
`

export const LogOutButton = styled.button`
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
export const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 170px;
  height: auto;
  white-space: normal;
  border: 1px solid white;
  border-radius: 5px;
`

export const DescText = styled.p`
  font-size: 14px;
  color: ${COLORS.whiteMain};
`

export const DescInfoText = styled.p`
  font-size: 16px;
  color: ${COLORS.whiteMain};
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`