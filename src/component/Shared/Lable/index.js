import * as React from "react";

import { Typography } from "@mui/material";

export function Label({
  name,
  children,
  fontClassName = "text-base",

  className,
  ...res
}) {
  let classes = ` xlabel text-grayLight ${className} ${fontClassName}`;

  return (
    <Typography className={classes} {...res}>
      {children}
    </Typography>
  );
}
