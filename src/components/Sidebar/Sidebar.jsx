import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ opened, setOpened }) {
  opened
    ? (document.body.style.position = "fixed")
    : (document.body.style.position = "");

  return (
    <section className={opened ? "sidebar active" : "sidebar"}>
      <div className="sidebar__outer" />
      <div className="sidebar__content">
        <div>
          <ul className="sidebar__items">
            <li className="sidebar__item">
              <Link 
                className="sidebar__link"
                to={'/'}>
                Главная
              </Link>
            </li>
            <li className="sidebar__item">
              <Link 
                className="sidebar__link"
                to={'/movies'}>
                Фильмы
              </Link>
            </li>
            <li className="sidebar__item">
              <Link 
                className="sidebar__link"
                to={'/saved-movies'}>
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
        </div>
        <button className="sidebar__account-btn">Аккаунт</button>
      </div>
      <button
        className="sidebar__btn-close"
        onClick={() => setOpened(!opened)}
      />
    </section>
  );
}

export default Sidebar;
