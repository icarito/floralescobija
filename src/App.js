import './App.css';
import { Gallery } from './component/Gallery';
import { IonFooter, IonHeader, IonToolbar } from '@ionic/react';
import { IonButton, IonIcon } from '@ionic/react';
import { useState } from 'react';
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import { rose } from 'ionicons/icons';
import { setupIonicReact } from '@ionic/react';

setupIonicReact();

function App() {
  const [showProd, setShowProd] = useState(false);
  return (
    <div className="App">
      { showProd &&
        <Gallery></Gallery>
      }
    <IonFooter>
      <IonToolbar>
        <IonButton onClick={()=>setShowProd(!showProd)}>
      <IonIcon icon={rose} size="large"></IonIcon>
        </IonButton>
      </IonToolbar>
    </IonFooter>
    </div>
  );
}

export default App;
