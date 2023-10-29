
import "./MenuButton.scss";
import HamburgerIcon from "../../../../../assets/icons/Hamburger.svg";

const MenuButton = () => {
    return (
        <button className="menu-button">
            <img src={HamburgerIcon} alt="Menu" />
        </button>
    );
};

export default MenuButton;
