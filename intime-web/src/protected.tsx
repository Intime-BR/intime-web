import { Navigate, useParams } from "react-router-dom";
import { HeaderApp } from "./components/Header/header";

type ProtectedProps = {
  isLoggedIn: boolean;
  children: any;
};

const Protected = ({ isLoggedIn, children }: ProtectedProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
