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
import { useState } from "react";
import Protected from "./protected";

const AppRoute = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  return isLoggedIn ? (
    <Router>
      <Protected isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/active-room" element={<ActiveRoom />} />
          <Route path="/dashboard" element={<Dashboard />} />
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
