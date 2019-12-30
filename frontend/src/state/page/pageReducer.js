import { NOT_FOUND } from 'redux-first-router';
import {
  HOME,
  LOGIN,
  REGISTRERING,
  ABOUT,
  QUESTION
} from '../../constants'

const components = {
  HOME,
  [NOT_FOUND]: 'NotFound',
  LOGIN,
  REGISTRERING,
  ABOUT,
  QUESTION
};

const page = (state = 'HOME', action = {}) => components[action.type] || state

export {
  page
};