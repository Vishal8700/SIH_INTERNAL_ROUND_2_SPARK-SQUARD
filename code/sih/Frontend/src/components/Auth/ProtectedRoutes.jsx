// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check for token

  return (
    <Route
      {...rest}
      element={isAuthenticated ? Component : <Navigate to="/login" />} // Redirect to login if not authenticated
    />
  );
};

export default ProtectedRoute;
