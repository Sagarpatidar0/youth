import { Link } from "react-router-dom";
import "./MyInventory.css";
import ProfileNavbar from "../profile/ProfileNavbar";
import { useState } from "react";

const MyInventory = () => {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <ProfileNavbar />
      <div className="inv-container">
        <h1 className="inv-title">My inventory</h1>
        <div className="login-section">
          <div className="inv-logo">
            <img src="images/logo.1.png" alt="" />
          </div>
          <div className="inv-login">
            <Link id="inv-login-btn">LOGIN</Link>
          </div>
        </div>
        <div className="wallet-section">
          <div className="step-instruction">
            01 - CONNECT YOUR WALLET{" "}
            <span onClick={() => setPopup(true)} className="info-icon">
              ?
            </span>
          </div>
          <button className="connect-wallet-button">CONNECT WALLET</button>
        </div>
        <div
          className={popup ? "wallet-popup" : "wallet-popup wallet-popup-close"}
        >
          <div className="popup-close">
            <img
              onClick={() => setPopup(false)}
              src="images/close-icon.png"
              alt=""
            />
          </div>
          <h1>WHAT IS A WALLET ?</h1>
          <p>
            At its core, an Ethereum wallet, also known as a client, holds your
            private key – ETH is the cryptocurrency used for all transactions on
            the Ethereum network, and it’s the currency we use for the Clonex
            avatars. Most of the NFTs on our platform can be purchased with ETH.
          </p>
          <p>
            MetaMask is a digital wallet that is specific to Ethereum. There are
            other wallets available, but RTFKT uses MetaMask. It’s connected to
            your web browser as an extension where you can hold and spend ETH.
            You’ll need to connect your wallet to RTFKT.com in order to
            participate to the preorder.
          </p>
          <p>you can download Metamask here:</p>
          <a id="meta-download-btn" href="https://metamask.io/">
            https://metamask.io/
          </a>
        </div>
      </div>
    </>
  );
};

export default MyInventory;
