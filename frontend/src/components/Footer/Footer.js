import React from 'react';
import {
  FooterContainer,
  InformationWrapper,
  StyledFocusInfo,
  StyledFocusText,
  WrapperForText
} from './StyledFooter';
import { footerData } from '../../staticData';

const Footer = () => {

  const renderInfoBanner = () => footerData.map(({ id, text, header }) => {
    return (
      <InformationWrapper key={id}>
        <StyledFocusInfo>{header}</StyledFocusInfo>
        <StyledFocusText>
          <WrapperForText>{text}</WrapperForText>
        </StyledFocusText>
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