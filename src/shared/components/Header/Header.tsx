import "./Header.scss";
import MenuButton from "./Components/MenuButton/MenuButton";
import LogoHeader from "./Components/Logo/LogoHeader";
import IconsGroup from "./Components/IconsGroup/IconsGroup";
import NavHeader from "./Components/NavHeader/NavHeader";

import { useMediaQuery } from "react-responsive";
import homePageConstants from "../../../pages/homePage/constants/homePageConstants";

const Header = () => {
    const isDesktop = useMediaQuery({ minWidth: homePageConstants.desktopBreakpoint });

    return (
        <>
            {isDesktop && (
                <header className="header">
                    <LogoHeader />
                    <NavHeader />
                    <IconsGroup />
                </header>
            )}
            {!isDesktop && (
                <header className="header">
                    <MenuButton />
                    <LogoHeader />
                    <IconsGroup />
                </header>
            )}
        </>
    );
};

export default Header;
