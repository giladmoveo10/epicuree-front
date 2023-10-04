import React from "react";
import "./UserProfileIcon.scss";
import UserProfileIcn from "../../../../../../assets/icons/ProfileIcon.svg";

const UserProfileIcon = () => {
    return (
        <div className="user-profile-icon">
            <img src={UserProfileIcn} alt="Search" />
        </div>
    );
};

export default UserProfileIcon;
