import React, { useState, useEffect } from 'react';
import { conectaPedidos } from '../lib/firebase';
import './list.css';

const FloreriaList = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const unsubscribe = conectaPedidos(snapshot => {
            const cambios = snapshot.docChanges();
            const nuevosPedidos = cambios.map(cambio => ({ id: cambio.doc.id, ...cambio.doc.data() }));
            setPedidos(nuevosPedidos);
        });

        return unsubscribe;
    }, []);

    return (
        <ul>
            {pedidos.map(pedido => (
                <div className="pedido" key={pedido.id}>
                    <h2 className="paraQuien">{pedido.paraQuien}</h2>
                    <p className="ubicacion">{pedido.ubicacion}</p>
                    <p className="referencia">{pedido.referencia}</p>
                    <p className="mensaje">{pedido.mensaje}</p>
                    <p className="celular">{pedido.celular}</p>
                    <p className="antiguedad">{pedido.created_at.toDate().toLocaleDateString()}</p>
                    <p className="antiguedad">{pedido.created_at.toDate().toLocaleTimeString()}</p>
                    <p className="estado">{pedido.estado}</p>
                </div>
            ))}
        </ul>
    );
};

//        <li key={pedido.id}>
//          <h3>{pedido.paraQuien}</h3>
//          <p>{pedido.ubicacion}</p>
//          {/* Y así con el resto de la información del pedido */}
//        </li>

export default FloreriaList;