import React from 'react';
import * as components from '../components/index';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

export const routePaths = {
  HOME: '/',
  LOGIN: '/login',
  REGISTRERING: '/registrering',
  ABOUT: '/oss',
  QUESTION: '/fragor',
}

const Views = ({ page }) => {
  const Component = components[page];
  return (
    <React.Fragment>
      <NavBar/>
      <Component />
    </React.Fragment>
  )
}

/**
 * MapStateToProps function for Redux-first-router;
 */
const mapStateToProps = ({ page }) => ({ page });
export default connect(mapStateToProps)(Views);