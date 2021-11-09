import React, { useState } from "react";

import Button from "./components/Button/Button";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import GasPage from "./pages/Gas/Gas";

import "./App.css";

function App() {
  const [page, setPage] = useState("gas");

  return (
    <div className="App">
      {page === "gas" ? <GasPage>Meu COMPONTE1</GasPage> : null}
      {page === "dashboard" ? <h1>Meu COMPONTE2</h1> : null}
      {page === "history" ? <h1>Meu COMPONTE3</h1> : null}
      <TabNavigation clickCallback={(value) => setPage(value)} />
    </div>
  );
}

export default App;
