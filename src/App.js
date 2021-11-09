import React, { useState } from "react";

import TabNavigation from "./components/TabNavigation/TabNavigation";
import GasPage from "./pages/Gas/Gas";
import HistoryPage from "./pages/History/History";

import "./App.css";

function App() {
  const [page, setPage] = useState("gas");

  return (
    <div className="App">
      {page === "gas" ? <GasPage /> : null}
      {page === "history" ? <HistoryPage /> : null}
      <TabNavigation clickCallback={(value) => setPage(value)} />
    </div>
  );
}

export default App;
