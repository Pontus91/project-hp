import { NOT_FOUND } from 'redux-first-router';
import {
  HOME,
} from '../../constants'

const components = {
  HOME,
  [NOT_FOUND]: 'NotFound'
};

const page = (state = 'HOME', action = {}) => components[action.type] || state

export {
  page
};