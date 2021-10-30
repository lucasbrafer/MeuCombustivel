import React, { useState } from "react";

import "./TabNavigation.css";

export const TabNavigation = ({ navItems, clickCallBack }) => {
  const [state, setState] = useState("teste 2");

  return (
    <nav class="nav">
      <span id="tab-dashboard" class="nav_link">
        <span>Dashboard</span>
      </span>
      <span id="tab-gas" class="nav_link nav-active">
        <span>Calculadora</span>
      </span>
      <span id="tab-history" class="nav_link">
        <span>Histórico</span>
      </span>
    </nav>
  );
};
