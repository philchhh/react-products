import React from "react";
import ReactDOM from "react-dom";

import { classnames } from "../../utils/helpers";
import Button from "../ui/Button";

function Modal({ openModal, closeModal, children }) {
  return (
    <div
      className={classnames({
        modal: true,
        "modal-open": openModal,
        "hide-modal": closeModal
      })}
    >
      <div
        className={classnames({
          "modal-dialog": true
          // "show-modal": openModal,
          // "hide-modal": closeModal
        })}
      >
        <div className="modal-content">
          <Button onClick={closeModal}>X</Button>
          <h2>Modal heading</h2>
          <p>This is modal content</p>
          {children}
        </div>
      </div>
    </div>
  );
  //return ReactDOM.createPortal(modal, document.getElementById("test"));
}

export default Modal;
