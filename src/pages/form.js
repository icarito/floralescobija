// import { db } from '../lib/firebase.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationInput from '../components/locationInput';
import { enviarPedido } from '../lib/firebase.js';
import './form.css';

function FloreriaForm({cart, addLocalOrder}) {
  const navigate = useNavigate();
  const [paraQuien, setParaQuien] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [referencia, setReferencia] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [celular, setCelular] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crea un nuevo documento en la colección "pedidos"
    enviarPedido({
      paraQuien,
      ubicacion,
      referencia,
      mensaje,
      celular,
      items: cart
    })
      .then((doc) => {
        addLocalOrder(doc.id)
        navigate("/orden/" + doc.id)
      })
      .catch((error) => {
        console.error('Error al enviar el pedido:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Envío de flores</h2>
      <fieldset>
        <legend>Información del destinatario</legend>
        <label htmlFor="paraQuien">Para quién es el pedido:</label>
        <input
          type="text"
          id="paraQuien"
          name="paraQuien"
          value={paraQuien}
          onChange={event => setParaQuien(event.target.value)}
        />
        <br />
        <label htmlFor="ubicacion">Ubicación:</label>
        <LocationInput setReferencia={setReferencia} />
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={ubicacion}
          onChange={event => setUbicacion(event.target.value)}
        />
        <br />
        <label htmlFor="referencia">Ubicación escrita:</label>
        <input
          type="text"
          id="referencia"
          name="referencia"
          value={referencia}
          onChange={event => setReferencia(event.target.value)}
        />
      </fieldset>
      <br />
      <fieldset>
        <legend>Mensaje para la tarjeta</legend>
        <label htmlFor="mensaje">Mensaje para la tarjeta:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={event => setMensaje(event.target.value)}
        />
      </fieldset>
      <br />
      <fieldset>
        <legend>Información de contacto del destinatario</legend>
        <label htmlFor="celular">Celular de quien recibe:</label>
        <input
          type="text"
          id="celular"
          name="celular"
          value={celular}
          onChange={event => setCelular(event.target.value)}
        />
      </fieldset>
      <br />
      <button disabled={cart.length == 0} type="submit">Enviar pedido</button>
    </form>
  );
}

export default FloreriaForm;