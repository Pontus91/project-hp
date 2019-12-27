import React from 'react';
import StartPage from '../views/StartPage';

const HOME = () => <StartPage />;

const NotFound = () => <p>Denna url finns inte på hundpassning.nu</p>;

export {
  HOME,
  NotFound
}
