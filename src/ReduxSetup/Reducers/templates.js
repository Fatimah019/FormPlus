import * as actionTypes from "../Actions/types";

const initialState = {
  templatesList: [],
  loading: true,
  error: false,
};

const templatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TEMPLATES:
      return {
        ...state,
        templatesList: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default templatesReducer;
