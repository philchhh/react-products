import React from "react";
import { classnames } from "../../../utils/helpers";

function Form({
  children,
  action,
  id,
  onSubmit,
  error,
  warning,
  className,
  loading
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div
        className={classnames({
          "form-container": true,
          [className]: className,
          error: error
        })}
      >
        {children}
      </div>
    </form>
  );
}

export default Form;
