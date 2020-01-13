import React from 'react';
import StartPage from '../views/StartPage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import AboutPage from '../views/AboutPage';
import QuestionPage from '../views/QuestionPage';
import ProfilePage from '../views/ProfilePage';
import SitterPage from '../views/SitterPage';

const HOME = () => <StartPage />;
const LOGIN = () => <LoginPage />;
const REGISTRERING = () => <RegisterPage />;
const ABOUT = () => <AboutPage />;
const QUESTION = () => <QuestionPage />;
const PROFILE = () => <ProfilePage />;
const SITTER = () => <SitterPage />;

const NotFound = () => <p>Denna url finns inte på hundpassning.nu</p>;

export {
  HOME,
  NotFound,
  LOGIN,
  REGISTRERING,
  ABOUT,
  QUESTION,
  PROFILE,
  SITTER
}
