import { api } from "../../http/api";
import axios from "../../http/axios";

export const STORE_USER_SETTINGS = "STORE_USER_SETTINGS";

export const updateUserSettings = (data, onSuccess, onFailure) => {
  return async (dispatch) => {
    try {
      axios.post(
        api.UPDATE_USER_WORK_REPORTERS_SETTINGS_API,
        data.reporters?.map((c) => c.id),
      ),
        dispatch({
          type: STORE_USER_SETTINGS,
          payload: {},
        });
      if (onSuccess) onSuccess();
    } catch (error) {
      if (onFailure) onFailure();
      console.error("updateUserWorkSettings", error);
    }
  };
};
