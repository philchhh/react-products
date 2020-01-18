import { classnames } from "../../utils/helpers";

function Messages({
  header,
  content,
  rounded,
  warning,
  success,
  notification,
  error,
  children
}) {
  return (
    <>
      {content && (
        <div
          className={classnames({
            message: true,
            notification: notification,
            rounded: rounded,
            warning: warning,
            error: error
          })}
        >
          <div className="message-header">
            <h3>{header}</h3>
          </div>
          <p>{content}</p>
          {children && children}
        </div>
      )}
    </>
  );
}

export default Messages;
