const serverUrl = "";

//process.env.REACT_APP_SERVER_URL;
export const baseUrl = serverUrl;

export const api = {
  RE_ORDER: baseUrl + "reOrder",

  NATIONALITIS_LIST_API: baseUrl + "Lookups/NationalityList",
};

export const FormatApi = (api = "", ...res) => {
  return api.format(...res);
};
