import { useState } from "react";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header loggedIn={loggedIn} />

      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
