import { Button } from "@mui/material";
import * as React from "react";

export default function ButtonGradient({
  color = "primary" || "secondary" || "secondaryDark",
  children,
  size = "medium",
  className,
  ...res
}) {
  return (
    <Button
      variant="contained"
      // size={size}
      className={
        " xbutton  rounded-lg fw-500 shadow-none hover:shadow-none  " +
        classes[color] +
        " " +
        className
      }
      {...res}
    >
      <span>{children}</span>
    </Button>
  );
}

const classes = {
  primary: " primaryGradient ",
  secondary: " secondaryGradient  light ",
  secondaryDark: " secondaryGradient dark ",
};
