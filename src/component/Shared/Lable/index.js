import * as React from "react";

import { Typography } from "@mui/material";

export function Label({
  name,
  children,
  fontClassName = "text-base",
  fontColor = "text-grayLight",
  className,
  ...res
}) {
  let classes = ` xlabel ${className} ${fontClassName} ${fontColor} `;

  return (
    <Typography className={classes} {...res}>
      {children}
    </Typography>
  );
}
