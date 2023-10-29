import "./LogoHeader.scss";
import LogoIcon from "../../../../../assets/icons/LogoIcon.png";

import { useMediaQuery } from "react-responsive";
import homePageConstants from "../../../../../pages/homePage/constants/homePageConstants";

const Logo = () => {
    const isDesktop = useMediaQuery({ minWidth: homePageConstants.desktopBreakpoint });

    return (
        <div className="logo">
            <img src={LogoIcon} alt="Company Logo" />
            {isDesktop && <div className="logo-text">EPICURE</div>}
        </div>
    );
};

export default Logo;
