import { combineReducers } from "redux";
import templatesReducer from "./templates";
import searchReducer from "./search";

const rootReducer = combineReducers({
  templatesData: templatesReducer,
  searchQuery: searchReducer,
});
export default rootReducer;
