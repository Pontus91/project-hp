import sitterState from './sitterState';
import {
  UPDATE_TIME,
  UPDATE_BREED,
  UPDATE_DESCRIPTION_INFO
} from './sitterActions';

export default function (state = sitterState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return { ...state, sitterState: { ...state.sitterState, date: action.value } }
    case UPDATE_BREED:
      return { ...state, sitterState: { ...state.sitterState, breed: action.value } }
    case UPDATE_DESCRIPTION_INFO: 
      return { ...state, sitterState: { ...state.sitterState, description: action.value } }
    default:
      return state
  }
}