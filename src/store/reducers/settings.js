import _ from "lodash";
import * as SettingsActions from "../actions/settingsActions";

/**
 * Representation of the user state.
 */
const initialState = {
  theme: {
    menuColor: "#27e0ef",
    menuTextColor: "#fff",
    titleColor: "#ccc",
    menuSecondColor: "#007d88",
    primaryColor: "#27e0ef",
    secondaryColor: "#007d88",
  },
  isLoading: true,
};

export const SettingsReducer = function (state = initialState, action) {
  switch (action.type) {
    case SettingsActions.STORE_USER_THEME_SETTINGS: {
      return {
        ...state,
        theme: action.payload,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
