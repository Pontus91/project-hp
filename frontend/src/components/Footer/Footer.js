import React from 'react';
import {
  FooterContainer,
  InformationWrapper,
  InfoHeader,
  InfoParagraph
} from './StyledFooter';
import { footerData } from '../../staticData';

const Footer = () => {

  const renderInfoBanner = () => footerData.map(({id, text, header}) => {
    return(
      <InformationWrapper key={id}>
        <InfoHeader>{header}</InfoHeader>
        <InfoParagraph>{text}</InfoParagraph>
      </InformationWrapper>
    )
  });
    
  return (
    <FooterContainer>
      {renderInfoBanner()}
    </FooterContainer>
  )
}

export default Footer;