import React from "react";
import Home from "./pages/Home";
import routes from "./constants/routes";
import reducer from "./store/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const store = createStore(reducer);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path={routes.home} element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
