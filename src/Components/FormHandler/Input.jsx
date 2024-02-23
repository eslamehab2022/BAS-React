import React from "react";
import { useForm } from "react-hook-form";

const Input = React.forwardRef(
  (
    {
      label,
      validator,
      submitted,
      mandatory,
      defaultValue = "",
      className = "",
      classNameWrap = "",
      formGroup = true,
      disabled = false,
      type = "text",
      required = false,
      width = "",
      height = "",
      append = "",
      prepend = "",
      background = "",
      name,
      value = "",
      borderColor = "#dee2e6",
      ...props
    },
    ref
  ) => {
    let hasWarning = submitted && validator && !validator.valid;

    return (
      <div
        className={`${formGroup ? "form-group" : ""} ${
          hasWarning ? "has-warning" : ""
        } ${classNameWrap} ${append || prepend ? "input-group" : ""}`}
      >
        {label && (
          <label className="form-label">
            {label} {mandatory && <span className="text-danger">*</span>}
          </label>
        )}
        {prepend && (
          <div className="input-group-prepend">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type={type}
          value={value}
          defaultValue={defaultValue}
          style={{ height, width, backgroundColor: background, borderColor }}
          disabled={disabled}
          className={`form-control h-[37px] ${className} ${
            submitted && validator && !validator.valid ? "is-invalid" : ""
          }`}
          ref={ref}
          {...props}
        />
        {append && (
          <div className="input-group-append">
            <span className="input-group-text">{append}</span>
          </div>
        )}
        {hasWarning && (
          <small className="invalid-feedback">{validator.message}</small>
        )}
      </div>
    );
  }
);

export default Input;
