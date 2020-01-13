import styled from 'styled-components';
import { COLORS } from '../../constants';

export const SitterContainer = styled.div`
  height: 74vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.mainGreen};
`

export const FormSitterWrapper = styled.div`
  border: 1px solid black;
  height: 40vh;
  width: 35%;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.whiteMain};
  @media (max-width: 576px){
    width: 100%;
    border: none;
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

export const SitterHeader = styled.h1`
  font-family: 'Pacifico',cursive;
  font-size: 20px;
`