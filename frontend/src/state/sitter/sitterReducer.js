import sitterState from './sitterState';
import {
  UPDATE_DATE,
  UPDATE_BREED,
  UPDATE_DESCRIPTION_INFO,
  UPDATE_TIME,
  UPDATE_CITY
} from './sitterActions';

export default function (state = sitterState, action) {
  switch (action.type) {
    case UPDATE_DATE:
      return { ...state, sitterState: { ...state.sitterState, date: action.value } }
    case UPDATE_BREED:
      return { ...state, sitterState: { ...state.sitterState, breed: action.value } }
    case UPDATE_DESCRIPTION_INFO:
      return { ...state, sitterState: { ...state.sitterState, description: action.value } }
    case UPDATE_TIME:
      return { ...state, sitterState: { ...state.sitterState, time: action.value } }
    case UPDATE_CITY:
      return { ...state, sitterState: { ...state.sitterState, city: action.value } }
    default:
      return state
  }
}