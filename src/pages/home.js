import logo from '../fondo.jpg';
import './home.css';

export default function Home() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://www.instagram.com/florales_cobija/">Instagram</a>
        <a className="App-link" href="https://www.facebook.com/floralescobija">Facebook</a>
        <a className="App-link" href="https://api.whatsapp.com/send?phone=+59177100737&text=Hola%20Florales%20Cobija,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20de%20sus%20ramos%20de%20flores.">Whatsapp</a>
      </header>
    )

}