import { Navigate, useParams } from "react-router-dom";

type ProtectedProps = {
  isLoggedIn: boolean | string;
  children: any;
};

const Protected = ({ isLoggedIn, children }: ProtectedProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;
