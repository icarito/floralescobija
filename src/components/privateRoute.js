import React, { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    return auth.currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
