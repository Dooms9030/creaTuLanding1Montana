import React from 'react';
import cerveza from '../assets/cerveza.jpg';
import vodka from '../assets/VODKA.jpg';
import ron from '../assets/Ron.jpg';
import fernet from '../assets/fernet.jpg';

const ItemListContainer = ({ mensaje }) => {
    const productos = [
        { id: 1, nombre: 'Cerveza', precio: 2000, imagen: cerveza },
        { id: 2, nombre: 'Vodka', precio: 3500, imagen: vodka },
        { id: 3, nombre: 'Ron', precio: 4500, imagen: ron },
        { id: 4, nombre: 'Fernet', precio: 4000, imagen: fernet }
    ];

    const agregarAlCarrito = (producto) => {
        console.log(`Agregaste ${producto.nombre} al carrito.`);
    };

    return (
        <div>
            <h2>{mensaje}</h2>
            <div>
                {productos.map(producto => (
                    <div key={producto.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <img src={producto.imagen} alt={producto.nombre} style={{ width: '100px', height: '100px' }} />
                        <h3>{producto.nombre}</h3>
                        <p>Precio: ${producto.precio}</p>
                        <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;
