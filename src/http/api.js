const serverUrl = "https://meetstest.free.beeceptor.com";

//process.env.REACT_APP_SERVER_URL;
export const baseUrl = serverUrl;

export const api = {
  RE_ORDER: baseUrl + "reOrder",

  THEME_API: baseUrl + "/my/api/theme",
};

export const FormatApi = (api = "", ...res) => {
  return api.format(...res);
};
