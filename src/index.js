import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import _ from "lodash";
import CustomTheme from "./theme";
import xHistory from "./utilities/history";
import "@babel/polyfill";
import { Web3Provider } from "./context/Web3Context";

export const xAction = (action) => store.dispatch(action);
export const xState = (path) => _.get(store.getState(), path);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <CustomTheme>
        <StyledEngineProvider injectFirst>
          <Web3Provider>
            <App />
          </Web3Provider>
        </StyledEngineProvider>
      </CustomTheme>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
