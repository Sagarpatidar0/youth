import Menu from "./Menu";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./profile.css";
// import Settings from "../setting/Setting";

const useWindowSize = () => {
  // Initialize state with the current window size
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Define a handler to update the state on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for resize event
    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

function Profile() {
  const [menu, setMenu] = useState(false);

  const { width, height } = useWindowSize();
  console.log(width, height);

  return (
    <>
      <div className="profile-nav">
        <div className="y-logo nav-item">
          <img src="images/title/6-removebg-preview (1).png" alt="" />
        </div>
        <div className="youth-logo nav-item">
          <img src="images/youthlogo_black.png" alt="" />
        </div>
        <div className="profile-logo nav-item" onClick={() => setMenu(true)}>
          <img src="images/profilelogo.png" alt="" />
        </div>
        {width < 768 && menu ? (
          <div className="menu-close" onClick={() => setMenu(false)}>
            <img src="images/close-icon.png" alt="" />
          </div>
        ) : null}
      </div>
      <CSSTransition
        in={width > 768 || menu}
        timeout={500}
        classNames="menu"
        unmountOnExit
      >
        <Menu />
      </CSSTransition>
      <div className="peofile-content">welcome berldev3</div>

      {/* <Settings/> */}
    </>
  );
}

export default Profile;

// const [value, setValue] = useState(false);

// import ToggleButton from "react-toggle-button";

{
  /* <button className="theme-btn">
    <ToggleButton
            inactiveLabel="Dark"
            activeLabel="Light"
            value={value}
            onToggle={() => {
              setValue((prevValue) => !prevValue);
            }}
          />
    </button> */
}
