import React from "react";

const TextArea = ({
  register,
  label,
  name,
  placeholder,
  rules = {},
  errors,
  rows = 10,
  maxLength = 2000,
}) => {
  return (
    <div className="mb-1">
      {label && (
        <label
          htmlFor={name}
          className="form-label fw-medium"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        maxLength={maxLength}
        rows={rows}
        name={name}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`form-control${errors?.[name] ? " is-invalid" : ""}`}
        style={{ resize: "none", height: "7rem", width: "100%" }}
      />
      {errors?.[name] && (
        <div className="invalid-feedback d-block">
          {errors[name].message || "יש למלא את השדה"}
        </div>
      )}
    </div>
  );
};

export default TextArea;
