import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// Only logged-in bartenders get in. Sessions saved before the role was
// stored have role null; the API itself still enforces the role.
const ProtectedRoute = ({ children }) => {
  const { token, role } = useSelector((state) => state.logInUser);
  const { pathname } = useLocation();

  if (!token || (role && role !== "bartender")) {
    return <Navigate to="/login" replace state={{ path: pathname }} />;
  }
  return children;
};

export default ProtectedRoute;
