import { Link } from "react-router-dom";
import "./Header.css";
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import useResize from "../../hooks/useResize";

function Header({ loggedIn }) {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const width = useResize()

  useEffect(() => {
    if (width > 768) {
      setSidebarOpened(false);
    }
  }, [width]);

  return (
    <header className="header">
      <Link to={'/'}>
        <div className="header__logo"></div>
      </Link>
      

      {!loggedIn && (
        <div className="header__info">
          <Link 
            className="header__link" 
            to="/signup">
            Регистрация
          </Link>
          <Link 
            className="header__login-btn"
            to={'/signin'}
            >Войти
          </Link>
        </div>
      )}

      {width > 768 && loggedIn && (
        <>
          <Navigation />
          <Link 
            className="header__account-btn"
            to={'/profile'}
            >Аккаунт
          </Link>
        </>
      )}

      {width <= 768 && loggedIn && (
        <div
          className="header__burger-btn"
          onClick={() => setSidebarOpened(!sidebarOpened)}
        ></div>
      )}

      {width <= 768 && (
        <Sidebar opened={sidebarOpened} setOpened={setSidebarOpened} />
      )}
    </header>
  );
}

export default Header;
