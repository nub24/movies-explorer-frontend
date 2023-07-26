import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { routesWithHeader, routesWithFooter } from "../../utils/constants.js";
import Footer from "../Footer/Footer.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  const headerRoutes = routesWithHeader.find((item) => {
    return item === location.pathname
  })

  const footerRoutes = routesWithFooter.find((item) => {
    return item === location.pathname
  })

  return (
    <div className="app">
      { headerRoutes && <Header loggedIn={loggedIn} />}

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      {footerRoutes && <Footer />}
    </div>
  );
}

export default App;
