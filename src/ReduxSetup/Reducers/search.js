import * as actionTypes from "../Actions/types";

const initialState = {
  search_word: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_WORD:
      return {
        ...state,
        search_word: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
