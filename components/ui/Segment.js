import { classnames } from "../../utils/helpers";

function Segment({ primary, items, children, loading }) {
  return (
    <div
      className={classnames({
        segment: true,
        primary: primary,
        loading: loading
      })}
    >
      {children}
    </div>
  );
}

export default Segment;
