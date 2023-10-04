import React from "react";
import "./LogoHeader.scss";
import LogoIcon from "../../../../../assets/icons/LogoIcon.png";

const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoIcon} alt="Company Logo" />
        </div>
    );
};

export default Logo;
