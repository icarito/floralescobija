import { useParams } from "react-router-dom";
import { getOrder } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Order() {
  const { id } = useParams();
  const [order, setOrder] = useState({});

    useEffect(() => {
        getOrder(id).then((doc) => {
        if (doc.exists()) {
            setOrder(doc.data());
        } else {
            console.log("No existe el documento");
        }
        });
    }, [id]);

  return (
    <>
        <h1>Pedido Recibido</h1>
        <div className="pedido" key={order.id}>
          <h2 className="paraQuien">{order.paraQuien}</h2>
          <p className="ubicacion">{order.ubicacion}</p>
          <p className="referencia">{order.referencia}</p>
          <p className="mensaje">{order.mensaje}</p>
          <p className="celular">{order.celular}</p>
          <p className="antiguedad">
            {order.created_at && order.created_at.toDate().toLocaleString()}
          </p>
          <div>
              {order.items &&
                order.items.map((item, num) => (
                  <p key={num}>
                    {item.nombre} - {item.precio}
                  </p>
                ))}
          </div>
          <p className="estado">{order.estado}</p>
          <p className="total">TOTAL: {order.total}</p>
        </div>
    </>
  );
}
