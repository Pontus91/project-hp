import React from 'react';
import {
  FooterContainer,
  InformationWrapper,
  FooterMedia,
  InfoHeader,
  TwitterLink,
  FacebookLink,
  LinkedInLink
} from './StyledFooter';

const Footer = () => {
  return (
    <FooterContainer>
      <InformationWrapper>
        <InfoHeader>Det ska vara enkelt att hitta hundpassning!</InfoHeader>
      </InformationWrapper>
      <FooterMedia>
        <TwitterLink />
        <FacebookLink />
        <LinkedInLink />
      </FooterMedia>
    </FooterContainer>
  )
}

export default Footer;