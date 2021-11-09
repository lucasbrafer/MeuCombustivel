import React, { useState } from "react";

import "./TabNavigation.css";

const TabNavigation = ({ clickCallback }) => {
  const [state, setState] = useState("gas");

  const handleSelect = (value) => {
    setState(value);
    if (clickCallback) {
      clickCallback(value);
    }
  };

  return (
    <nav className="nav">
      <span
        id="tab-gas"
        className={state === "gas" ? "nav_link nav-active" : "nav_link"}
        onClick={() => handleSelect("gas")}
      >
        <span>Calculadora</span>
      </span>
      <span
        id="tab-history"
        className={state === "history" ? "nav_link nav-active" : "nav_link"}
        onClick={() => handleSelect("history")}
      >
        <span>Histórico</span>
      </span>
    </nav>
  );
};

export default TabNavigation;
