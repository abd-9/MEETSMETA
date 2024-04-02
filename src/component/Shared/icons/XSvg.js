import React from "react";
import { ReactSVG } from "react-svg";

const XSvg = ({
  name,
  color = "var(--primary-color)",
  width,
  height,
  className,
  style,
  ...res
}) => {
  return (
    <ReactSVG
      beforeInjection={(svg) => {}}
      style={{ fill: color, stroke: color }}
      src={`/images/icons/${name}.svg`}
      {...res}
    />
  );
};

export default XSvg;
