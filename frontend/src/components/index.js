import React from 'react';
import StartPage from '../views/StartPage';
import LoginPage from '../views/LoginPage';
import RegisterPage from '../views/RegisterPage';
import AboutPage from '../views/AboutPage';
import QuestionPage from '../views/QuestionPage';
import ProfilePage from '../views/ProfilePage';
import SitterPage from '../views/SitterPage';
import GetSitterPage from '../views/GetSitterPage';
import MyDogSittings from '../views/MyDogSittings.js';
import MyPassing from '../views/MyPassings.js';

const HOME = () => <StartPage />;
const LOGIN = () => <LoginPage />;
const REGISTRERING = () => <RegisterPage />;
const ABOUT = () => <AboutPage />;
const QUESTION = () => <QuestionPage />;
const PROFILE = () => <ProfilePage />;
const SITTER = () => <SitterPage />;
const GETSITTER = () => <GetSitterPage />;
const MYDOGSITTINGS = () => <MyDogSittings />;
const MYPASSING = () => <MyPassing />;

const NotFound = () => <p>Denna url finns inte på hundpassning.nu</p>;

export {
  HOME,
  NotFound,
  LOGIN,
  REGISTRERING,
  ABOUT,
  QUESTION,
  PROFILE,
  SITTER,
  GETSITTER,
  MYDOGSITTINGS,
  MYPASSING
}
