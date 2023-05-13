import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore, query, where, onSnapshot } from "firebase/firestore";

// Configura tu proyecto de Firebase
const firebaseConfig = {
  // Reemplaza con la configuración de tu proyecto de Firebase
  apiKey: "AIzaSyB17v74AoVZC13p-hkOLc8BdK2QFhX58a0",
  authDomain: "floralescobija.firebaseapp.com",
  projectId: "floralescobija",
  storageBucket: "floralescobija.appspot.com",
  messagingSenderId: "1037069524660",
  appId: "1:1037069524660:web:6931ea572b549ad4b101e1"
};
const app = initializeApp(firebaseConfig);

// Inicializa Firebase
const db = getFirestore(app);

// Exporta los módulos de Firebase que utilizarás en tu aplicación
export const auth = getAuth();

export function enviarPedido(campos) {
  return addDoc(collection(db, 'pedidos'), {
    ...campos,
    estado: "pendiente",
    created_at: new Date()
  });
}

export function conectaPedidos(callback, estado = "pendiente") {
  const q = query(collection(db, "pedidos"), where("estado", "==", estado));

  return onSnapshot(q, callback)
}

export function getProductos(callback) {
  const q = query(collection(db, "productos"));

  return onSnapshot(q, callback)
}