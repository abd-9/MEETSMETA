/* eslint-disable no-undef */
import axios from "axios";
import { toast } from "react-toastify";
export const RESPONSE_STATUS = {
  validation: 422,
  unauthorized: 401,
  conflict: 409,
  serverError: 500,
  notFound: 404,
  forbidden: 403,
  badRequest: 400,
};

const instance = axios.create();

instance.interceptors.request.use(
  async (request) => {
    return request;
  },
  (errors) => {},
);
instance.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV !== "production")
      console.log("%c ---Ending Response", "color: green", response);
    return { data: response?.data?.data, response };
  },
  async (error) => {
    if (process.env.NODE_ENV !== "production")
      console.log("%c ---Error Response", "color: red", error?.response);

    if (
      error?.response?.status === RESPONSE_STATUS.validation ||
      error?.response?.status === RESPONSE_STATUS.conflict
    ) {
      return Promise.reject({
        ...error.response,
        payload: error.response?.data?.validationErrors,
      });
    }
    if (error?.response?.status === RESPONSE_STATUS.notFound) {
      return Promise.reject("not found ");
    }
    if (error?.response?.status === RESPONSE_STATUS.badRequest) {
      return Promise.reject(RESPONSE_STATUS.badRequest);
    }

    if (error.status === 500) {
      // toast.error("An unknown error occurred!");
    }

    return Promise.reject({
      ...(error?.response || {}),
      payload: error,
    });
  },
);

instance.defaults.headers.common["Content-Type"] = "application/json";
instance.defaults.headers.common.Accept = "application/json";
instance.defaults.headers.common["Accept-Language"] = "en";

export const ShowErrorInfoMsg = (error) => {
  try {
    if (typeof error.payload === "string") {
      return toast.error(error.payload);
    }
    if (typeof error.payload === "object") {
      return toast.error(error.payload[Object.keys(error.payload)[0]][0]);
    }
    return error;
    // eslint-disable-next-line no-empty
  } catch (error) {}
};

export default instance;
