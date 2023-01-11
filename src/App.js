import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("App Fn before");
  useEffect(() => {
    console.log("useEffect fn");
    const storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    console.log("storeUserLoggedInInformation", storeUserLoggedInInformation);
    if (storeUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  console.log("App Fn after");
  console.log(isLoggedIn);
  console.log("-----------------");
  const loginHandler = (email, password) => {
    console.log("loginHandler fn");
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
