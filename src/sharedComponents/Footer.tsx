import { Button } from "antd";
import React from "react";
import "./Footer.scss";
import msklogo from "../assets/msklogo.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-container">
        <img src={msklogo} alt="msk-logo-for-footer"></img>
        <div className="note">
          © 2023 Memorial Sloan Kettering Cancer Center: MyMSK
        </div>
      </div>

      <div className="right-container">
        <Button type="link" href="https://www.mskcc.org/privacy">
          Notice of Privacy Practices
        </Button>
        <Button
          type="link"
          href="https://my.mskcc.org/Patient/Footer/TermsAndConditions"
        >
          Terms of Use
        </Button>
      </div>
    </div>
  );
};

export default Footer;
