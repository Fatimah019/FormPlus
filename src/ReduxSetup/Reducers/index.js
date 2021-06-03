import { combineReducers } from "redux";
import templatesReducer from "./templates";

const rootReducer = combineReducers({
  templatesData: templatesReducer,
});
export default rootReducer;
