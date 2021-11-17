import React from "react";
import Carro from "../img/cart3.svg"
import "../CartWidget/CartWidget.css";

const CartWidget = () => {
    return (
        <div>
           <a href="#"> <img className="logo" alt="logo" src={Carro}/> </a>
        </div>
    )

};

export default CartWidget;