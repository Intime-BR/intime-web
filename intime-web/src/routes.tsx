import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderApp } from "./components/Header/header";
import Dashboard from "./pages/Dashboard/dashboard";
import ActiveRoom from "./pages/ActiveRoom/activeRoom";
import Login from "./pages/Login/login";
import NotFound from "./pages/NotFound/notFound";

const AppRoute = () => {
  return (
    <Router>
      <HeaderApp>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/active-room" element={<ActiveRoom />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HeaderApp>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/*" element={<NotFound />} /> 
      </Routes> */}
    </Router>
  );
};

export default AppRoute;
