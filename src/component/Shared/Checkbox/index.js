import React from "react";
import PropTypes from "prop-types";
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import clsx from "clsx";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { FormControlLabel } from "@mui/material";
import { CheckedIcon, UnCheckedIcon } from "../icons";
import MCheckbox from "@mui/material/Checkbox";
import { Label } from "../Lable";

const Checkbox = ({
  label,
  color,
  labelPlacement,
  checked,
  onChange,
  value,
  className,
  disabled,
  labelClassName,
  ...props
}) => {
  return (
    <FormControlLabel
      labelPlacement={labelPlacement}
      disabled={disabled}
      className={className}
      control={
        <MCheckbox
          className=" mx-2 "
          checkedIcon={<UnCheckedIcon></UnCheckedIcon>}
          icon={<CheckedIcon></CheckedIcon>}
          inputProps={{ "aria-label": "decorative checkbox" }}
          {...props}
          onChange={onChange}
          checked={checked}
          value={value}
          {...props}
        />
      }
      label={
        <Label fontColor="text-label-d2" className={labelClassName}>
          {label}
        </Label>
      }
    />
  );
};

export default Checkbox;
