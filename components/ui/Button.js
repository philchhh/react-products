import { classnames } from "../../utils/helpers";

function Button({
  commonBtn,
  secondary,
  className,
  label,
  icon,
  type,
  onClick,
  active,
  inline,
  floatRight,
  centered,
  disabled,
  children
}) {
  return (
    <button
      className={classnames({
        [className]: className,
        "common-btn": commonBtn,
        secondary: secondary,
        ["icon-" + icon]: icon,
        inline: inline,
        ta_center: centered,
        disabled: disabled,
        fl_right: floatRight,
        active: active
      })}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label && label}
      {children && children}
    </button>
  );
}

export default Button;
