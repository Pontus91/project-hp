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
  height: 10vh;
`
export const InformationWrapper = styled.div`
  flex: 1;
  border-top: 1px solid black;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const InfoHeader = styled.h1`
  color: ${COLORS.blackMain};
  font-size: 16px;
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;
  margin: 0;
`
export const FooterMedia = styled.div`
  flex: 1;
  border-top: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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