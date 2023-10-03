import React from "react";
import "./SearchIcon.scss";
import SearchIcn from "../../../../../../assets/icons/SearchIcon.svg";

const SearchIcon = () => {
    return (
        <div className="search-icon">
            <img src={SearchIcn} alt="Search" />
        </div>
    );
};

export default SearchIcon;
