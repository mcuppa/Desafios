import React from "react";
import CartWidget from '../CartWidget/CartWidget'
import {  NavLink } from "react-router-dom";
import logo from '../../components/img/logo.png'


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <NavLink to='/' href="#"><img className="navBarLogo" src={logo} alt=""></img></NavLink>  
    <div className="collapse navbar-collapse d-flex flex-row">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link h2 p-3" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/sale' className="nav-link h2 p-3" href="#">Ofertas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className="nav-link h2 p-3" href="#" id="navbarDropdown">
            Contacto
          </NavLink>
          
        </li>
       
      </ul>
     
        <CartWidget />
      
    </div>
  </div>
</nav>
    </div>
  )
};

export default NavBar;

