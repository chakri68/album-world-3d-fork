import "./App.css";
import React from "react";
import { Route, Routes, Outlet, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { useState } from "react";
import MyAlert from "./components/MyAlert";
import Main from "./components/Main";
import Starfield from "./components/Starfield";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, flag) => {
    setAlert({
      msg: message,
      type: type,
      flag: 1,
    });
  };

  return (
    <>
      <BrowserRouter>
        <MyAlert alert={alert} />
        <Routes>
          <Route
            element={
              <Starfield>
                <Outlet />
              </Starfield>
            }
          >
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/Signin" element={<Signin showAlert={showAlert} />} />
            <Route path="/Signup" element={<Signup showAlert={showAlert} />} />
            <Route path="/Main" element={<Main showAlert={showAlert} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
