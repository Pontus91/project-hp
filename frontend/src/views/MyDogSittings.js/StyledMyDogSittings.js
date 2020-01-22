import styled from 'styled-components';
import { COLORS } from '../../constants';

export const MyDogSittingContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.mainGreen};
`

export const MyDogSittingWrapper = styled.div`
  border: 1px solid black;
  height: auto;
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
    height: 75vh;
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
export const MyDogSittingHeader = styled.h1`
  font-size: 18px;
  font-family: 'Lato',sans-serif;
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

export const SitterDescWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SitterDiv = styled.div`
  display: flex;
`

export const StatusText = styled.p`
  color: ${COLORS.mainDarkRed};
  font-size: 16px;
  font-family: 'Lato',sans-serif;
  font-weight: bold;
`