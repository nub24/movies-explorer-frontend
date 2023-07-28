import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { routesWithHeader, routesWithFooter } from "../../utils/constants.js";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";

import NotFound from "../NotFound/NotFound.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
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
        <Route path="/movies" element={<Movies />}/>
        <Route path="/saved-movies" element={<SavedMovies />}/>

        <Route path="*" element={<NotFound />}/>

      </Routes>

      {footerRoutes && <Footer />}

    </div>
  );
}

export default App;
