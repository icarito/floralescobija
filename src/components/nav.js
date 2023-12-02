import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faShoppingCart, faSeedling, faListUl } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function NavBar({cart}) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faSeedling} />
          </Link>
        </li>
        <li>
          <Link to="/formulario">
            {cart.length}<FontAwesomeIcon icon={faShoppingCart} />
          </Link>
        </li>
        <li>
          <Link to="/localOrders">
            <FontAwesomeIcon icon={faListUl} />
          </Link>
        </li>
        <li>
          <Link to="/lista">
            <FontAwesomeIcon icon={faListCheck} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
