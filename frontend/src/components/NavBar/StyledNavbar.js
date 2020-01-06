import styled from 'styled-components';
import { COLORS } from '../../constants';
import Link from 'redux-first-router-link';

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8vh;
  flex-direction: row;
`
export const HeaderLink = styled(Link)`
  text-decoration: none;
`

export const LogoContainer = styled.div`
  background-color: ${COLORS.mainGreen};
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
`

export const LinkContainer = styled.div`
  background-color: ${COLORS.mainGreen};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoText = styled.p`
  @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
  font-family: 'Pacifico', cursive;
  color: ${COLORS.whiteMain};
  font-size: 20px;
  margin-left: 20px;
`

export const LinkText = styled.p`
  color: ${COLORS.whiteMain};
  font-size: 14px;
  margin: 15px;
  text-transform: uppercase;
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
`