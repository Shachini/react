import React from "react";
import "./index.css";
import "./routes/About";

import { Route, Routes } from "react-router-dom";
import About from "./routes/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
