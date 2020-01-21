import { NOT_FOUND } from 'redux-first-router';
import { UPDATE_ROUTE } from './pageAction';
import {
  HOME,
  LOGIN,
  REGISTRERING,
  ABOUT,
  QUESTION,
  PROFILE,
  SITTER,
  GETSITTER,
  MYDOGSITTINGS
} from '../../constants'

const components = {
  HOME,
  [NOT_FOUND]: 'NotFound',
  LOGIN,
  REGISTRERING,
  ABOUT,
  QUESTION,
  PROFILE,
  SITTER,
  GETSITTER,
  MYDOGSITTINGS
};

const page = (state = 'HOME', action = { UPDATE_ROUTE }) => components[action.type] || state

export {
  page
};