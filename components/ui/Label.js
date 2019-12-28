import { classnames } from "../../utils/helpers";

function Label({ children }) {
  return (
    <span
      className={classnames({
        "item-label": true
      })}
    >
      {children}
    </span>
  );
}

export default Label;
