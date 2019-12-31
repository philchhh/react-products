import { classnames } from "../../utils/helpers";
import Loader from "./Loader";

function Segment({ title, primary, items, children, loading }) {
  return (
    <div
      className={classnames({
        segment: true,
        primary: primary
      })}
    >
      {title && <h3 className="segment-title">{title}</h3>}

      {children}

      {loading && <Loader overlay />}
    </div>
  );
}

export default Segment;
