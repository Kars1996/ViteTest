/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Footer = ({ className }) => {
  return (
    <div className={`footer ${className}`}>
      <img
        className="fb"
        alt="Fb"
        src="https://cdn.animaapp.com/projects/652460bc4f902a56ff060074/releases/652461e59c7c7e3e5098e814/img/fb.svg"
      />
      <img
        className="linkedin"
        alt="Linkedin"
        src="https://cdn.animaapp.com/projects/652460bc4f902a56ff060074/releases/652461e59c7c7e3e5098e814/img/linkedin.svg"
      />
      <img
        className="group"
        alt="Group"
        src="https://cdn.animaapp.com/projects/652460bc4f902a56ff060074/releases/652461e59c7c7e3e5098e814/img/group@2x.png"
      />
      <img
        className="insta"
        alt="Insta"
        src="https://cdn.animaapp.com/projects/652460bc4f902a56ff060074/releases/652461e59c7c7e3e5098e814/img/insta@2x.png"
      />
      <p className="text-wrapper">Copyright ©2020 All rights reserved</p>
    </div>
  );
};
