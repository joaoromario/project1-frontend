import "./Navbar.scss";
import logo from "../../assets/Hotel_icon.svg";

const BASE_CLASS = "navbar";

export function Navbar() {
  return (
    <div className={BASE_CLASS}>
      <div className={`${BASE_CLASS}__logo`}>
        <img src={logo} alt="Logo" />
        <h2>Hotel Manager</h2>
      </div>
      <div className={`${BASE_CLASS}__items`}>
        <ul>
          <li>
            <a href="">Rooms</a>
          </li>
          <li>
            <a href="">Bookings</a>{" "}
          </li>
          <li>
            <a href="">Finance</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
