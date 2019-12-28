import { classnames } from "../../utils/helpers";

function Messages({
  header,
  content,
  rounded,
  warning,
  notification,
  error,
  children
}) {
  return (
    <div
      className={classnames({
        message: true,
        notification: notification && true,
        rounded: rounded && true,
        warning: warning && true,
        error: error && true
      })}
    >
      <div className="message-header">
        <h3>{header}</h3>
      </div>
      <p>{content}</p>
      {children && children}
    </div>
  );
}

export default Messages;
