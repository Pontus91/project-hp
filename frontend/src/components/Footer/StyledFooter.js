import styled from 'styled-components';
import { COLORS } from '../../constants';

export const FooterContainer = styled.div`
  width: auto;
  display: flex;
  height: auto;
  justify-content: center;
  text-align: center
  @media (max-width: 576px){
    flex-direction: column;
  }
`
export const InformationWrapper = styled.div`
  flex: 1;
  padding: 0 15px 0 15px;
  height: 18vh;
  background: ${COLORS.mainGreen};
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const StyledFocusInfo = styled.div`
  text-transform: uppercase;
  color: ${COLORS.whiteMain};
  margin: 5px 0 5px 0;
  font-family: 'Montserrat',sans-serif;
  font-weight: bold;
`
export const StyledFocusText = styled.div`
  font-size: 14px;
  color: ${COLORS.whiteMain};
  font-family: 'Montserrat',sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 576px){
    margin-bottom: 40px;
  }
`

export const WrapperForText = styled.div`
  width: 65%;
`