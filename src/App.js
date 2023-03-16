import './App.css';
import { Gallery } from './component/Gallery';
import { useState } from 'react';

function App() {
  const [showProd, setShowProd] = useState(false);
  return (
    <div className="App">
      { showProd &&
        <Gallery></Gallery>
      }
      <button onClick={()=>setShowProd(!showProd)}>Productos</button>
    </div>
  );
}

export default App;
