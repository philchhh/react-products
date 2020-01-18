import React from "react";
import { classnames } from "../../../utils/helpers";

function Textarea({
  label,
  value,
  id,
  name,
  required,
  placeholder,
  onChange,
  rows,
  error,
  disabled
}) {
  return (
    <div className="form-element">
      {label && <label htmlFor="{id}">{label}</label>}
      <div
        className={classnames({
          "form-control-container": true
        })}
      >
        <textarea
          className={classnames({
            error: error,
            disabled: disabled
          })}
          onChange={onChange}
          rows={rows || 5}
          value={value}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
        ></textarea>
      </div>
    </div>
  );
}

export default Textarea;
