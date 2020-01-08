import {ADD_IMAGE} from './../constants';

export function setImage(strUri) {
  return {
    type: ADD_IMAGE,
    payload: strUri,
  };
}

export function addImage(uri) {
  return dispatch => {
    try {
      dispatch(setImage(uri));
      return 0;
    } catch (error) {
      console.log(error);
    }
  };
}
