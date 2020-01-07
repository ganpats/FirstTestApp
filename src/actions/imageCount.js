import {INCREMENT_IMAGE_COUNT} from './../constants';

export function incrementImageCount(userData) {
  return {
    type: INCREMENT_IMAGE_COUNT,
    payload: userData,
  };
}
