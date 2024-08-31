import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Use the useAuth hook

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
