import { connectRoutes } from 'redux-first-router'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
import { routePaths } from '../../views'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const {
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
  initialDispatch
} = connectRoutes(routePaths, { initialDispatch: false });

/**
 * Root Store
 */
const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      routerEnhancer,
      composeWithDevTools(applyMiddleware(sagaMiddleware, routerMiddleware))
    )
  );

  sagaMiddleware.run(rootSaga)
  initialDispatch();
  return store;
}

export default configureStore;