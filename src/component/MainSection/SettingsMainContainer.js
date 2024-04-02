import React from "react";

import Divider from "@mui/material/Divider";
import { HomeIcon, NotificationIcon } from "../Shared/icons";
import { Container, Grid } from "@mui/material";

const SettingsContainer = ({ children }) => {
  return (
    <div
      className="flex flex-col grow relative z-3 w-full "
      style={{
        backgroundColor: "white",
        height: "92%",
        borderRadius: "30px",
        borderBottomLeftRadius: "0px",
      }}
    >
      {children}
    </div>
  );
};

export default SettingsContainer;
