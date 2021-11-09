import React from "react";

import "./Input.css";

import InputMask from "react-input-mask";

function Input(props) {
  return (
    <InputMask
      id="spent"
      placeholder="R$ 0,00"
      mask={props.mask}
      maskChar=" "
      onChange={(e) => props.onChange(e)}
      value={props.value}
      {...props}
    />
  );
}

export default Input;
