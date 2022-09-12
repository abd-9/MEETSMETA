import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import _ from "lodash";
import { XAutoComplate } from "../XAutoComplate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function XSelect({
  value = {},
  onChange = () => {},
  textHelper,
  label,
  name,
  lableKey = "label",
  valueKey = "id",
  className = "w-full ",
  selectClassName = "",
  defaultValue,
  options = [],
  formikApi,
  ...res
}) {
  return React.useMemo(
    () => (
      <FormControl
        className={className + " xselect filter-select-1 "}
        // sx={{ m: 1, minWidth: 120 }}
      >
        {label && <InputLabel id={`lab-${label}`}>{label}</InputLabel>}
        <XAutoComplate
          disablePortal
          lableKey={lableKey}
          valueKey={valueKey}
          defaultValue={defaultValue || options[0]}
          options={options}
          {...res}
          customIcon={
            <div className="ddl-icon">
              <KeyboardArrowDownIcon
                style={{ fill: "white", stroke: "white", colorL: "white" }}
                className="w-7 h-7 text-primary"
              />
            </div>
          }
          id={`lab-${label}`}
          className={selectClassName}
          value={
            formikApi ? _.get(formikApi?.values, name) || options[0] : value
          }
          label={label}
          onChange={
            formikApi
              ? (e, _value) => formikApi?.setFieldValue(name, _value)
              : onChange
          }
        ></XAutoComplate>
        {textHelper && <FormHelperText>{textHelper}</FormHelperText>}
      </FormControl>
    ),
    [options, value]
  );
}
