import {createStore, combineReducers, applyMiddleware} from 'redux';
import imageCountReducer from './../src/reducers/imageCountReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({imageCountReducer});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
