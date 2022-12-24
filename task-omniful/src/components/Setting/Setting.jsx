import React from "react";
import "./Setting.css";
import vehicle from "../../Assets/leftBar/vehicle.svg";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <>
      <div className="box">
        <h3>Settings</h3>

        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <img src={vehicle} alt="" /> Apps & Integration
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{}}>
                <li>
                  <Link to="/sales">
                    <img src={vehicle} alt="" /> Sales Channels Apps
                  </Link>
                </li>
                <li>
                  <img src={vehicle} alt="" /> Shipping Apps
                </li>
                <li>
                  <img src={vehicle} alt="" /> POS Apps
                </li>
                <li>
                  <img src={vehicle} alt="" /> ERP Apps
                </li>
                <li>
                  <img src={vehicle} alt="" /> SMS
                </li>
                <li>
                  <img src={vehicle} alt="" /> Payments
                </li>
                <li>
                  <img src={vehicle} alt="" /> WhatsApp Business
                </li>
                <li>
                  <img src={vehicle} alt="" /> Other Apps
                </li>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <img src={vehicle} alt="" />
                Omnifull App settings
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <li>
                  <img src={vehicle} alt="" /> Picker App
                </li>
                <li>
                  <img src={vehicle} alt="" /> Driver App
                </li>
                <li>
                  <img src={vehicle} alt="" /> Put-Away & Inventory
                </li>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <img src={vehicle} alt="" /> Hub Management
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <Link to="/hub">
                  <li>
                    <img src={vehicle} alt="" /> Hub
                  </li>
                </Link>
                <li>
                  <img src={vehicle} alt="" /> Locations
                </li>
                <li>
                  <img src={vehicle} alt="" /> Bins
                </li>
                <li>
                  <img src={vehicle} alt="" /> Consolidation area
                </li>
                <li>
                  <img src={vehicle} alt="" /> Stations
                </li>
                <li>
                  <img src={vehicle} alt="" /> Hub Stations
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
