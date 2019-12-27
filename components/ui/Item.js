import { classnames } from "../../utils/helpers";

function Item({ children }) {
  return (
    <div
      className={classnames({
        item: true
      })}
    >
      {children}
    </div>
  );
}

export default Item;
