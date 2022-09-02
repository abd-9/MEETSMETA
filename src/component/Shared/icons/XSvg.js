import React from "react";
import { ReactSVG } from "react-svg";

const XSvg = ({ name, color = "var(--primary-color)" }) => {
  return (
    <ReactSVG
      style={{ fill: color }}
      fill="red"
      stroke="red"
      src={`/images/icons/${name}.svg`}
    />
  );
};

export default XSvg;
