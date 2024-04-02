import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

const XTooltip = ({
  title,
  children,
  followCursor,
  placement = "top",
  ...res
}) => {
  let show = true;
  if (typeof title === "string") {
    show = Boolean(title?.trim());
  }

  return show && title ? (
    <Tooltip
      title={title}
      placement={placement}
      followCursor={followCursor}
      {...res}
    >
      {children}
    </Tooltip>
  ) : (
    children
  );
};

export default XTooltip;
