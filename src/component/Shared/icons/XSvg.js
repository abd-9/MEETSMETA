import React from "react";
import { ReactSVG } from "react-svg";

const XSvg = ({ name, color = "var(--primary-color)" }) => {
  return (
    <ReactSVG
      style={{ fill: color, stroke: color }}
      src={`/images/icons/${name}.svg`}
    />
  );
};

export default XSvg;
