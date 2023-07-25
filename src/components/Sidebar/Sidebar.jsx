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
              <a className="sidebar__link" href="#">
                Главная
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link" href="#">
                Фильмы
              </a>
            </li>
            <li className="sidebar__item">
              <a className="sidebar__link">Сохранённые фильмы</a>
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
