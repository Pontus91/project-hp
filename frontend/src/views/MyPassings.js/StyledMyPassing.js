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