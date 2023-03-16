import './Gallery.css'
import data from '../mock/products.json';

export function Gallery() {

  const currency = 'Bs.'

  return (
    <div className="Gallery-container">
      { data.map((prod)=>
        <div className="Gallery-card" key={prod.id}>
          <img alt={ 'foto de ' + prod.name } src={ './images/' + prod.photo }></img>
          <div className="Gallery-card-body">
            <label>{ prod.name }</label>
            <label>{ prod.price} { currency }</label>
          </div>
        </div>
      )
      }
    </div>
  )
}