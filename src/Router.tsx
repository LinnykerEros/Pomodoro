import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./pages/Home";
import History from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
      {/* <Route path="/admin" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route> */}
    </Routes>
  );
}

export { Router };
