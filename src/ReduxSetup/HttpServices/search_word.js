import * as actionTypes from "../Actions/types";
export const setSearchedWord = (text) => {
  return {
    type: actionTypes.SEARCH_WORD,
    payload: text,
  };
};
