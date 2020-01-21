import React from "react";
import { classnames } from "../../../utils/helpers";
import Button from "../Button";

function Input({
  type,
  label,
  value,
  action,
  id,
  name,
  accept,
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
          accept={accept}
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
        {action && (
          <Button
            commonBtn
            onClick={action.onClick}
            label={action.label}
            disabled={action.disabled}
          />
        )}
      </div>
    </div>
  );
}

export default Input;
