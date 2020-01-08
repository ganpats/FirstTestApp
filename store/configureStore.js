import {createStore, combineReducers, applyMiddleware} from 'redux';
import addImageReducer from './../src/reducers/addImageReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({addImageReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
