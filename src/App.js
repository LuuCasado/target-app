import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import CreateTarget from "pages/CreateTarget";
import EditTarget from "pages/EditTarget";
import EditProfile from "pages/EditProfile";
import SignIn from "pages/SignIn";
import SignUp from "pages/SignUp";
import routes from "constants/routes";
import reducer from "store/reducers";
import PrivateRoute from "components/auth/PrivateRoute";
import Modal from "components/global/Modal";
import ModalProvider from "components/global/Modal/ModalProvider";
import "./index.css";

const store = createStore(reducer);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route
                exact
                path={routes.home}
                element={<PrivateRoute page={<Home />} />}
              />
              <Route
                exact
                path={routes.createTarget}
                element={<PrivateRoute page={<CreateTarget />} />}
              />
              <Route
                exact
                path={routes.editTarget}
                element={<PrivateRoute page={<EditTarget />} />}
              />
              <Route
                exact
                path={routes.editProfile}
                element={<PrivateRoute page={<EditProfile />} />}
              />
              <Route exact path={routes.signIn} element={<SignIn />} />
              <Route exact path={routes.signUp} element={<SignUp />} />
            </Routes>
          </BrowserRouter>
          <Modal />
        </ModalProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
