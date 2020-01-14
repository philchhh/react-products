import React from "react";
import { classnames } from "../../../utils/helpers";

function Check({
  type,
  label,
  value,
  name,
  required,
  defaultChecked,
  onChange,
  error,
  disabled
}) {
  return (
    <label
      className={classnames({
        ["form-" + type]: type,
        "is-disabled": disabled
      })}
    >
      {label}
      <input
        onChange={onChange}
        type={type}
        name={name}
        disabled={disabled}
        error={error}
        defaultChecked={defaultChecked}
      />
      <span className="checkmark"></span>
    </label>
  );
}

export default Check;
