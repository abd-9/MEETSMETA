import _ from "lodash";
import * as SettingsActions from "../actions/settingsActions";

/**
 * Representation of the user state.
 */
const initialState = {
  theme: {
    menuColor: "#27e0ef",
    menuTextColor: "#fff",
    titleColor: "#2CB8C3",
    menuSecondColor: "#007d88",
    primaryColor: "#16A2AD",
    secondaryColor: "#777777",
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
