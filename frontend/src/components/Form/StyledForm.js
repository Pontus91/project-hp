import styled from 'styled-components';
import { COLORS } from '../../constants';

export const FormContainer = styled.form`
  border: 1px solid black;
  height: 50vh;
  width: 50%;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FormHeader = styled.h1`
  font-family: 'Pacifico',cursive;
  font-size: 20px;
`

export const ConfirmationButton = styled.button`
  min-width: 70%;
  background-color: ${COLORS.mainGreen};
  height: 30px;
  margin-top: 15px;
  border: none;
  color: white;
  text-transform: uppercase;

  &:hover{
    background-color: #45bf18;
  }
`