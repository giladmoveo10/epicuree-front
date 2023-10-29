import React from "react";
import "./IconsGroup.scss";

// Assuming you have individual components for each icon
import SearchIcon from "./SearchIcon/SearchIcon";
import UserProfileIcon from "./UserProfileIcon/UserProfileIcon";
import CartIcon from "./CartIcon/CartIcon";

const IconsGroup = () => {
    return (
        <div className="icon-group">
            <SearchIcon />
            <UserProfileIcon />
            <CartIcon />
        </div>
    );
};

export default IconsGroup;
