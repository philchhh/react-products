import { classnames } from "../../utils/helpers";

function Segment({ primary, items, children }) {
  return (
    <div
      className={classnames({
        segment: true
      })}
    >
      {children}
    </div>
  );
}

export default Segment;