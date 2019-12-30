import React from 'react';
import {
  NavbarContainer,
  LogoContainer,
  LinkContainer,
  LogoText,
  LinkText,
  HeaderLink
} from './StyledNavbar';

const NavBar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <HeaderLink to='/'>
          <LogoText>Hundpassning.nu</LogoText>
        </HeaderLink>
      </LogoContainer>
      <LinkContainer>
        <HeaderLink to='/oss'>
          <LinkText>Om Oss</LinkText>
        </HeaderLink>
        <HeaderLink to='/fragor'>
          <LinkText>Frågor</LinkText>
        </HeaderLink>
      </LinkContainer>
    </NavbarContainer>
  )
}

export default NavBar;
