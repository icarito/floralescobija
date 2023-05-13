import React, { useEffect, useState } from "react";
import { getProductos } from "../lib/firebase";
import "./gallery.css";

export default function FloreriaGallery() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const unsubscribe = getProductos(snapshot => {
            const cambios = snapshot.docChanges();
            const nuevosProductos = cambios.map(cambio => ({ id: cambio.doc.id, ...cambio.doc.data() }));
            setProductos(nuevosProductos);
        });

        return unsubscribe
    })

    return (
        <div className="Gallery">
        {
            productos.map(producto => (
                <div className="producto" key={producto.id}>
                    <h2 className="nombre">{producto.nombre}</h2>
                    <p className="descripcion">{producto.descripcion}</p>
                    <img className="imagen" src={producto.imagen} alt={producto.nombre} />
                    <p className="precio">{producto.precio}</p>
                </div>
            ))
        }
        </div>
    );
} 