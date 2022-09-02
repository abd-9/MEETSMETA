import { Button as MButton } from "@mui/material";
import * as React from "react";

export default function ButtonGradient({
  color = "primary" || "secondary" || "secondaryDark",
  children,
  size = "medium",
  className,
  textColor = "text-white",
  customPadding = false,
  ...res
}) {
  let classes = ` xbutton  rounded-lg fw-500 shadow-none hover:shadow-none  normal-case ${textColor} `;
  if (customPadding) {
    classes += " " + customPadding;
  } else {
    classes += "  py-2 px-8 ";
  }

  if (className) classes += " " + className;
  return (
    <MButton
      variant="contained"
      // size={size}
      className={`${classes} ${ColorGradinetClasses[color]} `}
      {...res}
    >
      <span>{children}</span>
    </MButton>
  );
}

const ColorGradinetClasses = {
  primary: " primaryGradient ",
  secondary: " secondaryGradient light ",
  secondaryDark: " secondaryGradient dark ",
};

const ColorClasses = {
  primary: " bg-primary ",
  secondary: " bg-secondary  ",
};

export function Button({
  color = "primary" || "secondary" || "secondaryDark",
  children,
  size = "medium",
  className,
  textColor = "text-white",
  customPadding = false,
  ...res
}) {
  let classes = ` xbutton  rounded-lg fw-500 shadow-none hover:shadow-none  normal-case ${textColor} `;
  if (customPadding) {
    classes += " " + customPadding;
  } else {
    classes += "  py-2 px-8 ";
  }

  if (className) classes += " " + className;
  return (
    <MButton
      color={color}
      variant="contained"
      className={`${classes} ${ColorClasses[color]} `}
      {...res}
    >
      <span>{children}</span>
    </MButton>
  );
}
