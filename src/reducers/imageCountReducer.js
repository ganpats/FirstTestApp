import {INCREMENT_IMAGE_COUNT} from '../constants';

const initialState = {
  imageCount: 0,
};

const imageCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_IMAGE_COUNT:
      return {
        ...state,
        imageCount: action.payload,
      };
    default:
      return state;
  }
};

export default imageCountReducer;
