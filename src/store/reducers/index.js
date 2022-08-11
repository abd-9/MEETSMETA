import { combineReducers } from "redux";
import { SettingsReducer } from "./settings";

export default combineReducers({
  Settings: SettingsReducer,
});
