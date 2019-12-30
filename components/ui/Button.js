import { classnames } from "../../utils/helpers";

function Button({ label, onClick, inline, floatRight, center, disabled }) {
  return (
    <button
      className={classnames({
        "common-btn": true,
        inline: inline,
        ta_center: center,
        disabled: disabled,
        fl_right: floatRight
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default Button;
