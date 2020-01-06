import styled from 'styled-components';
import { COLORS } from '../../constants';
import {
  Twitter, 
  Facebook,
  Linkedin 
 } from 'react-feather'; 

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 18vh;
`
export const InformationWrapper = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${COLORS.mainGreen};
`
export const InfoHeader = styled.h1`
  color: ${COLORS.whiteMain};
  font-size: 18px;
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  margin: 0;
  @media (max-width: 576px){
    font-size: 12px;
  }
`
export const InfoParagraph = styled.p`
 font-size: 14px;
 font-family: 'Lato', sans-serif;
 color: ${COLORS.whiteMain};
 width: 300px;
 @media (max-width: 992px){
  width: 245px;
}
 @media (max-width: 576px){
  font-size: 7px;
  width: 85px;
}
`
export const TwitterLink = styled(Twitter)`
 margin-right: 10px;
`
export const FacebookLink = styled(Facebook)`
 margin-right: 10px;
`
export const LinkedInLink = styled(Linkedin)`
 margin-right: 10px;
`