import React from "react";
import "./Sales.css";
import shopify from "./../../Assets/Sales/shopify.png";
import amazon from "./../../Assets/Sales/amazon.png";
// import dokan from "./../../Assets/Sales/dokan.png";
import dokan from "./../../Assets/Sales/dokan.png";
import flipkart from "./../../Assets/Sales/flipkart.png";
import magento from "./../../Assets/Sales/magento.png";
import myntra from "./../../Assets/Sales/myntra.png";
import opencart from "./../../Assets/Sales/opencart.png";
import panda from "./../../Assets/Sales/panda.png";
import salla from "./../../Assets/Sales/salla.png";
// import shopify from "./../../Assets/Sales/shopify.png";
import woo from "./../../Assets/Sales/woo.png";
import zid from "./../../Assets/Sales/zid.png";

const Sales = () => {
  return (
    <div className="main_div">
      <div className="upperDiv"></div>

      <div className="sales">
        <h4>Sales Channels (8)</h4>
        <div className="sales_div">
          <div className="card">
            <p>Active</p>
            <img src={shopify} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Shopify</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={dokan} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Dokan</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={zid} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Zid</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={panda} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Panda</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={woo} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Woocommerce</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={magento} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Magento</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={opencart} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Opencart</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={salla} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Salla</h6>
          </div>
        </div>
      </div>

      <div className="sales">
        <h4>Market Place (4)</h4>
        <div className="sales_div">
          <div className="card">
            <p>Active</p>
            <img src={amazon} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>Amazon</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={flipkart} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name</h5>
            <h6>flipkart</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={myntra} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name 1</h5>
            <h6>Myntra</h6>
          </div>
          <div className="card">
            <p>Active</p>
            <img src={myntra} alt="" height={"44px"} width={"134.59px"} />
            <h5>Custom Name 2</h5>
            <h6>Myntra</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
