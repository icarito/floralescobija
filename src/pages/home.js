import logo from '../fondo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header className="App-header">
      <Link to="/gallery">
        <button><h1>Hacer un Pedido</h1></button>
      </Link>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <a className="App-link" href="https://www.instagram.com/florales_cobija/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="App-link" href="https://www.facebook.com/floralescobija">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="App-link" href="https://api.whatsapp.com/send?phone=+59177100737&text=Hola%20Florales%20Cobija,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20ramos%20de%20flores.">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </header>
  )

}