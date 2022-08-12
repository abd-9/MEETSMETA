import React from "react";
import { Wheel } from "@uiw/react-color";
import { Button } from "reactstrap";
export const ColorPicker = ({ hex = "#fff", setHex, ...res }) => {
  return (
    <Wheel
      color={hex}
      {...res}
      onChange={(color) => {
        setHex(color.hex);
      }}></Wheel>
  );
};

export const ColorPickerButton = ({ hex = "#fff", onMouseUp, ...res }) => {
  return (
    <div className='color-picker-button'>
      <Button id='perviewer-button' onMouseUp={onMouseUp} {...res}>
        <div style={{ backgroundColor: hex }} id='perviewer'></div>
        <div id='perviewer2'></div>
        <div id='text' className='position-relative z-3 pl-3'>
          <span className='  '>Select color</span>
        </div>
      </Button>
    </div>
  );
};
