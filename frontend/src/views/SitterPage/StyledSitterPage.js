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
  height: 73vh;
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

export const SitterHeader = styled.h1`
  font-family: 'Pacifico',cursive;
  font-size: 20px;
`

export const SitterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SitterLabel = styled.label`
  font-size: 20px;
  font-family: 'Lato',sans-serif;
  margin-top: 15px;
  @media (max-width: 576px){
    font-size: 15px;
  }
`

export const SitterInput = styled.input`
  width: 100%;
  color: ${COLORS.mainBlue};
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${COLORS.mainGreen};
  margin: 10px 0px 15px 0px;
`

export const SitterTextArea = styled.textarea`
  margin-top: 15px;
  width: 100%;
  height: 50px;
`

export const SitterButton = styled.button`
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
  margin-top: 7px;
`

export const SitterSelect = styled.select`
  width: 100%;
  margin-top: 15px;
`