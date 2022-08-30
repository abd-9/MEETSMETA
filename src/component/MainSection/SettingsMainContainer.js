import React from "react";

import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";
import { Container, Grid } from "@mui/material";

const SettingsContainer = ({ children }) => {
  return (
    <div
      className="d-flex flex-column grow-1 relative z-3 w-full "
      style={{
        backgroundColor: "white",
        height: "90%",
        borderRadius: "30px",
        borderBottomLeftRadius: "0px",
      }}
    >
      {children}
    </div>
  );
};

export default SettingsContainer;
