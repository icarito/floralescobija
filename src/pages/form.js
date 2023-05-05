import React, { useState } from 'react';

function FloreriaForm() {

  const [ paraQuien, setParaQuien ] = useState('');
  const [ ubicacion, setUbicacion ] = useState('');
  const [ referencia, setReferencia ] = useState('');
  const [ mensaje, setMensaje ] = useState('');
  const [ celular, setCelular ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías realizar alguna operación con los datos del formulario
    // Por ejemplo, enviar un correo electrónico o guardar los datos en una base de datos
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
        <label htmlFor="ubicacion">Ubicación vía whats:</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={ubicacion}
          onChange={event => setUbicacion(event.target.value)}
        />
        <br />
        <label htmlFor="referencia">Punto de referencia:</label>
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
      <button type="submit">Enviar pedido</button>
    </form>
  );
}

export default FloreriaForm;