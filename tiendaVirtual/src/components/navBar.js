import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav>
            <h1>Mi Ecommerce</h1>
            <div>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
