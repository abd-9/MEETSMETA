import React, { useState } from "react";

import _ from "lodash";
import { Autocomplete, CircularProgress, debounce } from "@mui/material";
import { InputOutlined } from "../Input/Input";
import { DropdownDownIcon } from "../icons";

/**
 *   <XAutoComplate
          options={userList || []}
          lableKey='fullName'
            valueKey='userId'
             onInputChange={(value) => loadOptions(value)}
                onChange={(e, value) => setFieldValue("assigneeBy", value)}
                value={values.assigneeBy || []}
                // loading={fetchingUsers}
                name='assigneeBy'
              />
 * @param {*} param0 
 * @returns 
 */
export const XAutoComplate = ({
  label,
  children,
  className,
  hideSelectedOptions = true,
  options,
  lableKey = "value",
  valueKey = "id",
  loading = false,
  value,
  onInputChange,
  defaultValue = null,
  onChange,
  withApi,
  customIcon,
  ...res
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="xautocomplate ">
      <Autocomplete
        {...res}
        // multiple={multiple}
        onChange={(e, v) => {
          onChange(e, v);
          setInputValue("");
        }}
        // filterSelectedOptions

        classes={{ endAdornment: "hover:bg-transparent" }}
        popupIcon={
          customIcon || <div className="mt-0.5">{<DropdownDownIcon />}</div>
        }
        // limitTags={4}
        disableClearable
        options={options}
        // getOptionSelected={(option, value) =>
        //   option[valueKey] === value[valueKey]
        // }

        size="small"
        // renderTags={(tagValue, getTagProps) =>
        //   tagValue.map((option, index) => {
        //     return (
        //       <Tags
        //         key={option[valueKey]}
        //         _readOnly={true}
        //         text={option[lableKey]}
        //         small
        //         gray
        //         className='mr-1 mb-1 fz-m'
        //         autoComplate
        //         onDelete={() => {
        //           onChange(
        //             null,
        //             value?.filter((a) => a[valueKey] !== option[valueKey]),
        //           );
        //         }}></Tags>
        //     );
        //   })
        // }
        // inputValue={inputValue || ""}
        value={value}
        getOptionLabel={(option) => _.get(option, lableKey)}
        defaultValue={defaultValue}
        renderInput={(params) => (
          <InputOutlined
            {...params}
            endButton={
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            }
          />
        )}
      />
    </div>
  );
};

export default function LookupDropDown({
  value,
  onChange,
  fetchApi,
  lableKey = "name",
  lable,
  RenderInput = InputOutlined,
  noLoading = false,
  inputProps,
  variant = "outlined",
  ...res
}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const onInputChange = (ss, _value) => {
    let active = true;

    debounce(() => {
      (async () => {
        await setLoading(true);
        const response = await fetchApi(_value);
        const data = await response;

        if (active) {
          const _data = data.slice(0, 10);
          await setOptions(_data);
          await setLoading(false);
        }
      })();
    })();

    return () => {
      active = false;
    };
  };

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
    if (open === true) onInputChange();
  }, [open]);

  return (
    <Autocomplete
      {...res}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      value={value}
      noOptionsText={"No data"}
      // getOptionSelected={(option, value) => option?.name === value?.name}
      getOptionLabel={(option) => option[lableKey] || ""}
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      loading={loading}
      renderInput={(params) => (
        <RenderInput
          {...params}
          {...inputProps}
          label={lable}
          variant={variant}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {noLoading && loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
