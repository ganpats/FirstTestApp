import { UPDATE_COUNT } from '../constants';

const initialState = {
  count: 0,
};

const updateCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};

export default updateCountReducer;
