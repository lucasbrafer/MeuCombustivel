import React from "react";

import "./Button.css";

function Button(props) {
  return (
    <button type="button" className="button center w-60 mt2" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
