import React, { useState } from "react";
import { classnames } from "../../utils/helpers";
import Button from "./Button";

function Accordion({ label, content, card, children }) {
  const [toggleState, setToggleState] = useState(false);

  function toggleAccordion() {
    setToggleState(prevToggleState => !prevToggleState);
  }

  return (
    <div className={classnames({ accordion: true, card: card })}>
      <Button
        className={`accordion-head ${toggleState ? "expanded" : ""}`}
        onClick={toggleAccordion}
      >
        {label}
        <i
          className={`plus-minus ${toggleState ? "expanded" : "collapsed"}`}
        ></i>
      </Button>

      <div className={`pane ${toggleState ? "expanded" : ""}`}>
        <div
          className="pane-content"
          // dangerouslySetInnerHTML={{ __html: content }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
