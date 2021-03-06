import { combineReducers } from 'redux';
import { page } from '../page/pageReducer';
import { connectRoutes } from 'redux-first-router'
import { routePaths } from '../../views/index'
import userReducer from '../../state/user/userReducer';
import sitterReducer from '../../state/sitter/sitterReducer';
const { reducer: location } = connectRoutes(routePaths);

export default combineReducers({
  page,
  location,
  userReducer,
  sitterReducer
});