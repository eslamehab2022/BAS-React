import React from "react";
import ReactSelect from "react-select";
import AsyncSelect from "react-select/async";

// eslint-disable-next-line react/display-name
const Select = React.forwardRef((props, ref) => {
  const {
    label,
    validator,
    mandatory,
    width,
    height,
    submitted,
    isMulti = false,
    formGroup = true,
    small = false,
    async = false,
    autoHeight = false,
    className = "",
    OptionbackgroundColor = "#2B2B40",
    cacheOptions = true,
    labelClasses,
  } = props;

  let hasWarning = submitted && validator && !validator.valid;
  const selectStyles = (small, autoHeight) => {
    const height = autoHeight ? "auto" : small ? "30px" : "41.90px";

    let options = {
      control: (styles) => ({
        ...styles,
        borderColor: "#dee2e6",
        borderRadius: "0.25rem",
        height,
        minHeight: height,
        cursor: "pointer",
      }),
      option: (styles, { isFocused }) => ({
        ...styles,
        cursor: "pointer",
        Zindex: 99999,
        backgroundColor: isFocused ? OptionbackgroundColor : "",
      }),
      placeholder: (styles) => ({ ...styles, color: "#fff" }),
      value: (styles) => ({ ...styles, color: "#fff" }),
    };
    if (small) {
      options = {
        ...options,
        ...{
          dropdownIndicator: (base) => ({
            ...base,
            padding: 4,
          }),
          clearIndicator: (base) => ({
            ...base,
            padding: 4,
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0px 6px",
          }),
          input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
          }),
        },
      };
     
    }

    return options;
  };
  return (
    <div
      className={`${formGroup ? "form-group" : ""} ${
        hasWarning ? "has-warning" : ""
      }`}
    >
      {label && (
        <label className={`form-label ${labelClasses}`}>
          {label} {mandatory && <span className="text-danger">*</span>}
        </label>
      )}
      {!async && (
        <ReactSelect
          ref={ref}
          styles={selectStyles(small, autoHeight)}
          isMulti={isMulti}
          placeholder="اختر"
          width
          height
          className={`react-select !text-white ${className} ${
            submitted && validator && !validator.valid ? "is-invalid" : ""
          }`}
          {...props}
        />
      )}
      {async && (
        <AsyncSelect
          ref={ref}
          //  menuPlacement='اختر'
          placeholder="اختر"
          styles={selectStyles(small)}
          isMulti={isMulti}
          width
          height
          className={`react-select !text-white ${className} ${
            submitted && validator && !validator.valid ? "is-invalid" : ""
          }`}
          {...props}
          cacheOptions={cacheOptions}
          defaultOptions={[]}
        />
      )}

      {hasWarning && (
        <small className="invalid-feedback">{validator.message}</small>
      )}
    </div>
  );
});

export default Select;
