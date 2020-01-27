import React from "react";
import ReactDOM from "react-dom";

import { classnames } from "../../utils/helpers";
import Button from "../ui/Button";

Modal.Header = ({ children }) => {
  return <h3 className="modal-header">{children}</h3>;
};

Modal.Content = ({ children }) => {
  return <div className="modal-content">{children}</div>;
};

Modal.Actions = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

function Modal({ openModal, closeModal, children }) {
  return (
    <>
      <div
        className={classnames({
          modal: true
        })}
      >
        <div
          className={classnames({
            "modal-dialog": true
          })}
        >
          {children}
        </div>
      </div>
      <div className="modal-backdrop in"></div>
    </>
  );
}

export default Modal;
