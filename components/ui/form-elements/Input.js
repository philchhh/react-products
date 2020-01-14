import React from "react";
import { classnames } from "../../../utils/helpers";

function Input({
  type,
  label,
  value,
  id,
  name,
  required,
  currency,
  placeholder,
  onChange,
  error,
  disabled
}) {
  return (
    <div className="form-element">
      {label && <label htmlFor="{id}">{label}</label>}
      <div
        className={classnames({
          "form-control-container": true,
          search: type === "search",
          currency: currency
        })}
      >
        <input
          onChange={onChange}
          value={value}
          type={type ? type : "text"}
          className={classnames({
            "form-control": true,
            error: error,
            disabled: disabled
          })}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        />
      </div>
    </div>
  );
}

export default Input;
