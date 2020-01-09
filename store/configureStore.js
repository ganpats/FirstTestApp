import { createStore, combineReducers, applyMiddleware } from 'redux';
import addImageReducer from './../src/reducers/addImageReducer';
import updateCountReducer from './../src/reducers/updateCountReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ addImageReducer, updateCountReducer });

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
