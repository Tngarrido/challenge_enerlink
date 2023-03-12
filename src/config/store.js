
import { applyMiddleware, compose, createStore } from 'redux';
//import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createRootReducer from '../reducers';

const sagaMW = createSagaMiddleware();
const middleware = [sagaMW];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  createRootReducer(),
  composeEnhancer(applyMiddleware(...middleware))
);

sagaMW.run(rootSaga);

export default store;

