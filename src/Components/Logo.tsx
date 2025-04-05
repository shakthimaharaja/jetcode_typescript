import React from "react";
import { ReactComponent as Logo } from "../Images/Model.svg";
import "./ComponentsCss/General.css";
const LogoComponent: React.FC = () => {
  return (
    <div className="toolbar-logo zoom">
      <Logo />
    </div>
  );
};

export default LogoComponent;
