import _ from "lodash";
import * as SettingsActions from "../actions/settingsActions";

/**
 * Representation of the user state.
 */
const initialState = {
  notifications: {},
  sidebar: {},
  isLoading: true,
  isOpen: false,
};

export const SettingsReducer = function (state = initialState, action) {
  switch (action.type) {
    case SettingsActions.STORE_USER_SETTINGS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};
