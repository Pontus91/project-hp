import React from 'react';
import * as components from '../components/index';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const routePaths = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRERING: '/registrering',
  ABOUT: '/oss',
  QUESTION: '/fragor',
  PROFILE: '/profil'
}

const Views = ({ page }) => {
  const Component = components[page];
  return (
    <React.Fragment>
      <NavBar />
      <Component />
      <Footer />
    </React.Fragment>
  )
}

/**
 * MapStateToProps function for Redux-first-router;
 */
const mapStateToProps = ({ page }) => ({ page });
export default connect(mapStateToProps)(Views);