import React from "react";
import "./Navbar.css";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import flash from "./../../Assets/Navbar/flash.png";
import expand from "./../../Assets/Navbar/expand.png";
import flag from "./../../Assets/Navbar/flag.png";
import bell from "./../../Assets/Navbar/bell.svg";
import help from "./../../Assets/Navbar/help.png";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-light"
        style={{
          borderBottom: "2px solid #EEF0FF",
          height: "56px",
        }}
      >
        <div class="container-fluid">
          <div className="quick">
            <a class="navbar-brand" href="#">
              <img src={flash} alt="" /> Quick Links
              <img src={expand} alt="" />
            </a>
          </div>

          <div>
            <span class="navbar-brand" href="#">
              <img src={flag} alt="" /> English
            </span>
            <a class="navbar-brand" href="#">
              <img src={bell} alt="" />
            </a>
            <a class="navbar-brand" href="#">
              <img src={help} alt="" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
