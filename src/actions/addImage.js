import { ADD_IMAGE } from '../constants';

export function addImage(uri) {
  return dispatch => {
    dispatch({ type: ADD_IMAGE, payload: uri });
  };
}
