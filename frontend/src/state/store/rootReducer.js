import { combineReducers } from 'redux';
import { page } from '../page/pageReducer';
import { connectRoutes } from 'redux-first-router'
import { routePaths } from '../../views/index'
const { reducer: location } = connectRoutes(routePaths);

export default combineReducers({
  page,
  location,
});