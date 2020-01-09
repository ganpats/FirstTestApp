import { UPDATE_COUNT } from '../constants';

export function updateCount(value) {
  return dispatch => {
    dispatch({ type: UPDATE_COUNT, payload: value });
  };
}
