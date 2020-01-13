import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  NavbarContainer,
  LogoContainer,
  LinkContainer,
  LogoText,
  LinkText,
  HeaderLink
} from './StyledNavbar';

const NavBar = () => {

  const [userLink, setUserLink] = useState(false);

  /**
   * If user is online we set userLink to true so you can easy access your profile.
   */
  useEffect(() => {
    axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:3001/api/login',
    }).then(response => {
      if (response.data.status === 'not logged in') {
        setUserLink(false);
      } else {
        setUserLink(true);
      }
    })
  }, [])

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
        {userLink ?
          <HeaderLink to='/profil'>
            <LinkText>Min Profil</LinkText>
          </HeaderLink>
          : null}
      </LinkContainer>
    </NavbarContainer>
  )
}

export default NavBar;
