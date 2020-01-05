import { classnames } from "../../utils/helpers";

function Label({ content, children }) {
  return (
    <span
      className={classnames({
        "item-label": true
      })}
    >
      {children && children}
      {content && content}
    </span>
  );
}

export default Label;
