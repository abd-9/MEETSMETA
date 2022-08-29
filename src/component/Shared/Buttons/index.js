import { Button } from "@mui/material";
import * as React from "react";

export default function ButtonGradient({
  color = "primary" || "secondary" || "secondaryDark",
  children,
  size = "medium",
  className,
  customPadding = false,
  ...res
}) {
  let classes =
    " xbutton  rounded-lg fw-500 shadow-none hover:shadow-none  normal-case   ";
  if (customPadding) {
    classes += " " + customPadding;
  } else {
    classes += "   py-2 px-8 ";
  }
  if (className) classes += " " + className;
  return (
    <Button
      variant="contained"
      // size={size}
      className={`${classes} ${ColorClasses[color]} `}
      {...res}
    >
      <span>{children}</span>
    </Button>
  );
}

const ColorClasses = {
  primary: " primaryGradient ",
  secondary: " secondaryGradient  light ",
  secondaryDark: " secondaryGradient dark ",
};
