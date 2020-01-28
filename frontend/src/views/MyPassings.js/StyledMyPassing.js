import styled from 'styled-components';
import { COLORS } from '../../constants';
 
export const PassingContainer = styled.div`
  height: 74vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.mainGreen};
  @media (max-width: 576px){
    height: auto;
  }
`

export const PassingWrapper = styled.div`
  border: 1px solid black;
  height: 60vh;
  width: 50%;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.whiteMain};
  @media (max-width: 576px){
    width: 100%;
    border: none;
    height: auto;
  }
  @media (max-width: 992px){
    width: 100%;
    border: none;
  }
  @media (max-width: 1024px){
    width: 100%;
    border: none;
  } 
`
export const SitterPost = styled.div`
  width: 90%;
  height: auto;
  border: 1px solid black;
  margin: 10px;
  background: ${COLORS.mainGreen};
  border-radius: 7px;
`

export const DogSitterHeader = styled.h1`
  text-align: center;
  font-size: 16px;
  font-family: 'Lato',sans-serif;
  text-transform: uppercase;
  margin-top: 15px;
  color: ${COLORS.whiteMain};
`

export const SitterDescWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SitterDiv = styled.div`
  display: flex;
`

export const SitterText = styled.p`
  flex: 1;
  text-align: center;
  font-family: 'Lato',sans-serif;
  font-weight: bold;
  color: ${COLORS.whiteMain};
`

export const SitterDesc = styled.p`
  text-align: center;
  font-weight: bold;
  font-family: 'Lato',sans-serif;
  color: ${COLORS.whiteMain};
  width: 40%;
`
export const StatusAccepted = styled.div`
  color: ${COLORS.acceptGreen};
  font-size: 14px;
  font-family: 'Lato',sans-serif;
  font-weight: bold;
`
