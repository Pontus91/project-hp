import userState from './userState';
import {
  UPDATE_USER
} from './userAction';

export default function (state = userState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, userState: action.value }
    default:
      return state
  }
}