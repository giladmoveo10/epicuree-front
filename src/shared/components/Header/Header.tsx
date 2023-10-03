import "./Header.scss";
import MenuButton from "./Components/MenuButton/MenuButton";
import LogoHeader from "./Components/Logo/LogoHeader";
import IconsGroup from "./Components/IconsGroup/IconsGroup";

const Header = () => {
    return (
        <header className="header">
            <MenuButton />
            <LogoHeader />
            <IconsGroup />
        </header>
    );
};

export default Header;
