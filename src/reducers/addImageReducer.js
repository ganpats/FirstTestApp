import { ADD_IMAGE } from '../constants';

const initialState = {
  images: [],
};

const addImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    default:
      return state;
  }
};

export default addImageReducer;
