import React from "react";
import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import routes from "constants/routes";
import reducer from "store/reducers";
import Layout from "components/global/Layout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

const store = createStore(reducer);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route exact path={routes.home} element={<Home />} />
              <Route exact path={routes.signIn} element={<SignIn />} />
              <Route exact path={routes.signUp} element={<SignUp />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
