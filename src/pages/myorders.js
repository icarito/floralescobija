import { Link } from "react-router-dom";

export default function MyOrders({ localOrders }) {
  return (
    <>
      <h1>Mis pedidos</h1>
      <ul>
        {localOrders &&
          localOrders.map((order, num) => (
            <li key={num}>
              <Link to={`/orden/${order}`}><button>{order}</button></Link>
            </li>
          ))}
      </ul>
    </>
  );
}
