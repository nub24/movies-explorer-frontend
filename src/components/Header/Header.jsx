import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from "react";

function Header({ loggedIn }) {
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const [dataLayout, setData] = useState({
    w: 0,
  });

  useEffect(() => {
    setData({
      w: window.innerWidth,
    });
    window.addEventListener("resize", resize);
  }, []);

  useEffect(() => {
    if (dataLayout.w > 768) {
      setSidebarOpened(false);
    }
  }, [dataLayout.w]);

  const resize = (e) => {
    setData({
      w: e.target.innerWidth,
    });
  };

  return (
    <header className="header">
      <div className="header__logo"></div>

      {!loggedIn && (
        <div className="header__info">
          <a className="header__link" href="#">
            Регистрация
          </a>
          <button className="header__login-btn">Войти</button>
        </div>
      )}

      {dataLayout.w > 768 && loggedIn && (
        <>
          <nav className="header__nav">
            <a className="header__navlink">Фильмы</a>
            <a className="header__navlink">Сохраненные фильмы</a>
          </nav>
          <button className="header__account-btn">Аккаунт</button>
        </>
      )}

      {dataLayout.w <= 768 && loggedIn && (
        <div
          className="header__burger-btn"
          onClick={() => setSidebarOpened(!sidebarOpened)}
        ></div>
      )}

      {dataLayout.w <= 768 && (
        <Sidebar opened={sidebarOpened} setOpened={setSidebarOpened} />
      )}
    </header>
  );
}

export default Header;
