import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./profile.css";
import Menu from "./Menu";

function ProfileNavbar() {
    const [menu, setMenu] = useState(false);
  return (
    <div><div className="profile-nav">
    <div className="y-logo nav-item">
      <img src="images/title/6-removebg-preview (1).png" alt="" />
    </div>
    <div className="youth-logo nav-item">
      <img src="images/youthlogo_black.png" alt="" />
    </div>
    <div className="profile-logo nav-item" onClick={() => setMenu(true)}>
      <img src="images/profilelogo.png" alt="" />
    </div>
    {menu ? (
      <div className="menu-close" onClick={() => setMenu(false)}>
        <img src="images/close-icon.png" alt="" />
      </div>
    ) : null}
  </div>
  <CSSTransition
    in={ menu}
    timeout={500}
    classNames="menu"
    unmountOnExit
  >
    <Menu />
  </CSSTransition></div>
  )
}

export default ProfileNavbar