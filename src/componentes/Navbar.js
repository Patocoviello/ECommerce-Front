import './Navbar.css'

import { NavLink } from "react-router-dom";

export const Navbar = () =>
<nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse text-monospace" id="navbarSupportedContent">
  <div className="conteiner-fluid"></div>
      <span id="icon-log"></span>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          </li>
          <li className="nav-item">
            <NavLink className="nav-link bg-transparent text-white ml-5" id="nav-links" to="/inicio" >Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link bg-transparent text-white ml-3" id="nav-links" to="/contacto" >Contacto</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link bg-transparent text-white ml-3" id="nav-links" to="/nosotros" >Nosotros</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link bg-transparent text-white ml-3" id="nav-links" to="/alta" >Alta</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link bg-transparent text-white ml-3" id="nav-links" to="/carrito" >Carrito</NavLink>
          </li>
        </ul>
        <NavLink id="icon-carrito" to="/carrito" ></NavLink>
      </div>
  </nav>
    