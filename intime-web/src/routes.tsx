import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { HeaderApp } from "./components/Header/header";
import Dashboard from "./pages/Dashboard/dashboard";
import ActiveRoom from "./pages/ActiveRoom/activeRoom";
import Login from "./pages/Login/login";
import NotFound from "./pages/NotFound/notFound";
import { useEffect, useState } from "react";
import Protected from "./protected";
import { ConvertStringToBool } from "./utils/exports";
import RegisterUsers from "./pages/RegisterUsers/registerUsers";

const AppRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    ConvertStringToBool[localStorage.getItem("logged") || 0]()
  );

  useEffect(() => {
    isLoggedIn ? false : localStorage.setItem("logged", "0");
  }, [isLoggedIn]);

  return isLoggedIn ? (
    <Router>
      <Protected isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/active-room" element={<ActiveRoom />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register-users" element={<RegisterUsers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Protected>
    </Router>
  ) : (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
