import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ opened, setOpened }) {
  opened
    ? (document.body.style.position = "fixed")
    : (document.body.style.position = "");

    const closeSidebar = () => setOpened(!opened)

  return (
    <section className={opened ? "sidebar active" : "sidebar"}>
      <div className="sidebar__outer" />
      <div className="sidebar__content">
        <div>
          <ul className="sidebar__items">
            <li className="sidebar__item">
              <Link 
                className="sidebar__link"
                to={'/'}
                onClick={closeSidebar}>
                Главная
              </Link>
            </li>
            <li className="sidebar__item">
              <Link 
                className="sidebar__link"
                to={'/movies'}
                onClick={closeSidebar}>
                Фильмы
              </Link>
            </li>
            <li className="sidebar__item">
              <Link 
                className="sidebar__link"
                to={'/saved-movies'}
                onClick={closeSidebar}>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </div>
        <Link 
          className="sidebar__account-btn" 
          to={'/profile'}
          onClick={closeSidebar}>
          Аккаунт
        </Link>
      </div>
      <button
        className="sidebar__btn-close"
        onClick={() => setOpened(!opened)}
      />
    </section>
  );
}

export default Sidebar;
