import React from "react";
import Home from "./pages/Home";
import routes from "./constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path={routes.home} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
