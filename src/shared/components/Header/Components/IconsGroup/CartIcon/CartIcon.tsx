import React from "react";
import "./CartIcon.scss";
import CartIcn from "../../../../../../assets/icons/CartIcon.svg";

const CartIcon = () => {
    return (
        <div className="cart-icon">
            <img src={CartIcn} alt="Search" />
        </div>
    );
};

export default CartIcon;
