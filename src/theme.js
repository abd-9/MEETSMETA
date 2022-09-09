import React from "react";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { connect } from "react-redux";

const CustomTheme = ({ children, colors }) => {
  const theme = React.useMemo(() => {
    return createTheme({
      palette: {
        // mode: "light",
        primary: {
          main: colors.primaryColor || "#007d88",
        },
        secondary: {
          // light: red[500],
          main: "#777777",
          // dark: red[900],
          // contrastText: grey[50],
        },
        // error: {
        //   light: red[400],
        //   main: red[500],
        //   dark: red[300],
        //   contrastText: grey[800],
        // },
        // success: {
        //   main: green[500],
        // },
        // warning: {
        //   main: yellow[500],
        //   contrastText: grey[800],
        // },
        // info: {
        //   main: lightBlue[500],
        // },
        // text: {
        //   primary: grey[900],
        //   secondary: grey[700],
        //   disabled: grey[500],
        // },
        // action: {
        //   active: red[200],
        //   activeOpacity: 1,
        //   disabled: grey[700],
        //   disabledBackground: grey[200],
        //   hover: red[100],
        //   hoverOpacity: 0.7,
        //   focus: red[600],
        //   focusOpacity: 1,
        //   selected: red[300],
        //   selectedOpacity: 1,
        // },
        background: {
          // default: orange[300],
          // paper: grey[200],
        },
        common: {
          // black: grey[900],
          // white: grey[200],
          // fontFamily: ["Montserrat"],
          fontFamily: [
            "Montserrat",
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
          ].join(","),
        },

        typography: {
          fontFamily: [
            "Montserrat",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
          ].join(","),
        },
      },
    });
  }, [colors]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const mapStateToProps = (state) => {
  return {
    colors: state.Settings?.theme || {},
  };
};
export default connect(mapStateToProps, null)(CustomTheme);
