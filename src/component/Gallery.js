import './Gallery.css'
import { IonContent, IonCard, IonImg, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import data from '../mock/products.json';

export function Gallery() {

  const currency = 'Bs.'

  return (
    <IonContent>
      { data.map((prod)=>
        <IonCard className="Gallery-card" key={prod.id}>
          <IonImg className="Gallery-img" alt={ 'foto de ' + prod.name } src={ './images/' + prod.photo }/>
          <div className="Gallery-card-body">
            <label>{ prod.name }</label>
            <label>{ prod.price} { currency }</label>
          </div>
        </IonCard>
      )
      }
    </IonContent>
  )
}