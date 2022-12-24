import React from "react";
import "./LeftBar.css";
import Logo from "../../Assets/leftBar/Logo.png";
import home from "../../Assets/leftBar/home.png";
import dollar from "../../Assets/leftBar/dollar.png";
import growth from "../../Assets/leftBar/growth.png";
import box from "../../Assets/leftBar/box.png";
import parcel from "../../Assets/leftBar/parcel.png";
import figures from "../../Assets/leftBar/figures.png";
import wallet from "../../Assets/leftBar/wallet.png";
import setting from "../../Assets/leftBar/setting.png";
import contact from "../../Assets/leftBar/contact.png";
import privacy from "../../Assets/leftBar/privacy.png";
import bar from "../../Assets/leftBar/bar.png";
import help from "../../Assets/leftBar/help.png";
import exit from "../../Assets/leftBar/exit.png";

const LeftBar = () => {
  return (
    <>
      <div
        className="main_leftBar"
        style={{ borderRight: "2px solid #EEF0FF" }}
      >
        <div className="icon">
          <img src={Logo} alt="" />
        </div>
        <div className="icon">
          <img src={home} alt="" />
        </div>
        <div className="icon">
          <img src={dollar} alt="" />
        </div>
        <div className="icon">
          <img src={growth} alt="" />
        </div>
        <div className="icon">
          <img src={box} alt="" />
        </div>
        <div className="icon">
          <img src={parcel} alt="" />
        </div>
        <div className="icon">
          <img src={figures} alt="" />
        </div>
        <div className="icon">
          <img src={wallet} alt="" />
        </div>
        <div className="icon">
          <img src={parcel} alt="" />
        </div>
        <div className="icon">
          <img src={setting} alt="" />
        </div>
        <div className="icon">
          <img src={contact} alt="" />
        </div>
        <div className="icon">
          <img src={privacy} alt="" />
        </div>
        <div className="icon">
          <img src={bar} alt="" />
        </div>
        <div className="icon">
          <img src={help} alt="" />
        </div>
        <div className="icon">
          <img src={exit} alt="" />
        </div>
      </div>
    </>
  );
};

export default LeftBar;
