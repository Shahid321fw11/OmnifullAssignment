import React from "react";
import "./Hub.css";
import shopify from "./../../Assets/Sales/shopify.png";

const Hub = () => {
  return (
    <div className="main_div">
      <div className="upperDiv"></div>

      <div className="div">
        <h4>All Hubs(3)</h4>
        <div className="hub_div">
          <div className="card">
            <p>Active</p>
            <img src={shopify} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Shopify</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={shopify} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Shopify</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={shopify} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Shopify</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;
