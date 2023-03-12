import { combineReducers } from 'redux';
import todos from './todos';

const createRootReducer = () =>
  combineReducers({
    todos
  });

export default createRootReducer;
