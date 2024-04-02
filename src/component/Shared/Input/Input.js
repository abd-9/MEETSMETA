import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

import { SearchIcon } from "../icons";
import { InputAdornment, TextField } from "@mui/material";

export default function SearchInput({ placeholder = "Search" }) {
  return (
    <Paper
      component="form"
      className="input"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
export function InputOutlined({
  name,
  value,
  onChange,
  label,
  placeholder = "",
  className,
  endButton = null,
  startButton = null,
  ...res
}) {
  return (
    <TextField
      size="small"
      className={" xinput w-full  " + className}
      placeholder={placeholder}
      label={label}
      InputProps={{
        endAdornment: endButton && (
          <InputAdornment position="end">{endButton}</InputAdornment>
        ),
        startAdornment: startButton && (
          <InputAdornment position="start">{startButton}</InputAdornment>
        ),
      }}
      variant="outlined"
      {...res}
    />
  );
}

export function InputStandard({
  name,
  value,
  onChange,
  label,
  placeholder = "",
  className,
  endButton = null,
  startButton = null,
  ...res
}) {
  return (
    <TextField
      size="small"
      className={" xinput w-full  " + className}
      placeholder={placeholder}
      label={label}
      InputProps={{
        endAdornment: endButton && (
          <InputAdornment position="end">{endButton}</InputAdornment>
        ),
        startAdornment: startButton && (
          <InputAdornment position="start">{startButton}</InputAdornment>
        ),
      }}
      variant="standard"
      {...res}
    />
  );
}
