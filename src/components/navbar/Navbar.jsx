import { Link } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [menuClass, setMenuClass] = useState("navbar-menu");
  const [navbarClass, setNavbarClass] = useState("ph-navbar");
  const [bargerClass, setBargerClass] = useState("fa-solid fa-burger fa-beat-fade");

  const openMenu = () => {
    setMenuClass("navbar-menu menu-active");
    setNavbarClass("ph-navbar display-none");
  };

  const closeMenu = () => {
    setMenuClass("navbar-menu");
    setNavbarClass("ph-navbar");
  };

  setTimeout(() => {
    setBargerClass("fa-solid fa-burger");
  }, 5000);

  useEffect(() => {}, [menuClass]);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/images/icon.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Rank</a>
          </li>
          <li className="dropdown">
            <a href="#">Community</a>
            <ul className="dropdown-content">
              <li>
                <a className="dropdown-item" href="#header">
                  COMMUNITY
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  BRANDS
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="login-btn">
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="phone-navbar">
        <nav className={navbarClass} id="navbar-phone">
          <div className="navbar-logo">
            <img src="./images/icon.png" alt="Logo" />
          </div>
          <div className="navbar-burger" id="burger" onClick={openMenu}>
          <i className={bargerClass}></i>
          </div>
        </nav>
        <div className={menuClass} id="menu">
          <div className="navbar-close" id="close" onClick={closeMenu}>
            <span></span>
            <span></span>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Rank</a>
            </li>
            <li className="dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown07XL"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                COMMUNITY
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
                <li>
                  <a className="dropdown-item" href="#header">
                    COMMUNITY
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BRANDS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
