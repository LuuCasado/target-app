import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import routes from "constants/routes";
import reducer from "store/reducers";
import Layout from "components/global/Layout";
import PrivateRoute from "components/auth/PrivateRoute";
import "./index.css";

const store = createStore(reducer);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path={routes.home}
                element={<PrivateRoute page={<Home />} />}
              />
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
