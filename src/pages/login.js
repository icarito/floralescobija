import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase'; // Importa tu objeto de autenticación
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigateTo = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            // El usuario ha iniciado sesión correctamente
            navigateTo("/lista")
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
            // El usuario ha iniciado sesión con Google correctamente
            navigateTo("/lista")
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <div>
            <h2>Iniciar Sesión</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Contraseña:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Iniciar Sesión</button>
                <button type="button" onClick={handleGoogleLogin}>
                    Iniciar Sesión con Google
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
