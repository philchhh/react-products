import { classnames } from "../../utils/helpers";

function Container({ primary, center, children }) {
  return (
    <div
      className={classnames({
        container: true,
        "content-main": primary,
        ta_center: center
      })}
    >
      {children}
    </div>
  );
}

export default Container;
