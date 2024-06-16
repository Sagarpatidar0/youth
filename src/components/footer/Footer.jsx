import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-row frow-one">
        <h1>
          <span>Y</span>outh<span>S</span>pire
        </h1>
        <h2>PARTNERS</h2>
        <h2>Breakmart</h2>
      </div>
      <div className="footer-row frow-two">
        <div className="rt-col">
          <h3>legal stuff</h3>
          <p>FAQ & support </p>
          <p>Privacy policy</p>
          <p> terms & conditions</p>
          <p> auctions terms</p>
        </div>
        <div className="rt-col">
        <h3>More stuff</h3>
          <p>mint details</p>
          <p>our team</p>
          <p>careers</p>
          <p>Youth Program</p>
        </div>
      </div>
      <div className="footer-row frow-three">
        <div id="foot-btn">
            <a href="">Work With us</a>
        </div>
        <div id="footer-socialicon">
          <Link target="_blank" to="https://chat.whatsapp.com/JwUqDLjo2LcCi2CRBVudvy">
            <img src="./images/22.PNG" alt="" />
          </Link>
          <Link target="_blank" to="https://t.me/+REZ-rwXYsCBjYTM1">
            <img src="./images/23.PNG" alt="" />
          </Link>
          <Link target="_blank" to="https://instagram.com/youthspire_">
            <img src="./images/24.PNG" alt="" />
          </Link>
          <Link target="_blank" to="/">
            <img src="./images/25.PNG" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
