import styled from 'styled-components';
import { COLORS } from '../../constants';

export const FormContainer = styled.form`
  border: 1px solid black;
  height: 50vh;
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

export const FormHeader = styled.h1`
  font-family: 'Pacifico',cursive;
  font-size: 20px;
`

export const ConfirmationButton = styled.button`
  min-width: 70%;
  background-color: ${COLORS.mainBlue};
  height: 30px;
  margin-top: 15px;
  border: none;
  color: white;
  text-transform: uppercase;

  &:hover{
    background-color: ${COLORS.hoverButtonColor};
    cursor: pointer;
  }

  @media (max-width: 576px){
    margin-bottom: 10px;
  }
`