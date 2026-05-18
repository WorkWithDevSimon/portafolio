import React, { useState } from 'react';
import { close, menu } from "../../icon/indexicon";
import './Navestilo.css';
import { NavLink } from 'react-router-dom';

export const Navegador = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const alternarMenu = () => {
        setMenuAbierto(prev => !prev);
    };

    const cerrarMenu = () => {
        setMenuAbierto(false);
        window.scrollTo(0, 0); // Desplaza al principio de la página
    };

    return (
        <header className="header">
            <div className="container_nav">
                <NavLink to='/' className="logo" onClick={cerrarMenu}>S <span>S</span></NavLink>
                <nav className={`nav ${menuAbierto ? 'open' : 'closed'}`}>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Proyectos'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Proyectos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Certificados'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Certificados
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/Contacto'
                                className={({ isActive }) => isActive ? 'active' : ''}
                                onClick={cerrarMenu}
                            >
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="menu_icono" onClick={alternarMenu} aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}>
                    <img src={menuAbierto ? close : menu} alt={menuAbierto ? "Cerrar menú" : "Abrir menú"} />
                </button>
            </div>
        </header>
    );
};
