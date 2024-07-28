import { useStore } from "../store";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user } = useStore();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
