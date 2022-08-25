import { api } from "../../http/api";
import axios from "../../http/axios";

export const STORE_USER_THEME_SETTINGS = "STORE_USER_SETTINGS";

export const UpdateUserThemeSettings = (data, onSuccess, onFailure) => {
  return async (dispatch) => {
    try {
      axios
        .post(api.THEME_API, data)
        .then((res) => {
          dispatch({
            type: STORE_USER_THEME_SETTINGS,
            payload: data,
          });
          if (onSuccess) onSuccess();
        })
        .catch(() => {
          onFailure && onFailure();
          // I jsut add it here to test the logic because the server is not working
          dispatch({
            type: STORE_USER_THEME_SETTINGS,
            payload: data,
          });
        });
    } catch (error) {
      if (onFailure) onFailure();
    }
  };
};

export const FetchUserThemeSettings = (onSuccess, onFailure) => {
  return async (dispatch) => {
    try {
      axios
        .get(api.THEME_API)
        .then((res) => {
          dispatch({
            type: STORE_USER_THEME_SETTINGS,
            payload: res.data,
          });
          if (onSuccess) onSuccess();
        })
        .catch(() => {
          onFailure && onFailure();
        });
    } catch (error) {
      if (onFailure) onFailure();
      console.error("updateUserWorkSettings", error);
    }
  };
};
