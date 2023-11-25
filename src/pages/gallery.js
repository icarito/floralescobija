import React, { useEffect, useState } from "react";
import { getProductos } from "../lib/firebase";
import "./gallery.css";
import { useNavigate } from "react-router-dom";

export default function FloreriaGallery({addToCart}) {
    const [productos, setProductos] = useState([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        const unsubscribe = getProductos(snapshot => {
            const cambios = snapshot.docChanges();
            const nuevosProductos = cambios.map(cambio => ({ id: cambio.doc.id, ...cambio.doc.data() }));
            setProductos(nuevosProductos);
        });

        return unsubscribe
    })

    function handleClick(product){
        addToCart(product)
        navigateTo("/formulario")
    }

    return (
        <div className="Gallery">
        {
            productos.map(producto => (
                <button onClick={()=>handleClick(producto)} style={{backgroundImage: 'url(' + producto.imagen +')'}} className="producto" key={producto.id}>
                    <img className="imagen" src={producto.imagen} alt={producto.nombre} />
                    <h2 className="nombre">{producto.nombre}</h2>
                    <p className="descripcion">{producto.descripcion}</p>
                </button>
            ))
        }
        </div>
    );
} 