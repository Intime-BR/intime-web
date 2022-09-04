import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderApp } from "./components/Header/header";
import { Dashboard } from "./pages/Dashboard/dashboard";
import { ActiveRoom } from "./pages/Active-Room/active-room";
import DynamicLineChart from "./components/MiddleContent/lineChart";
import { Login } from "./pages/Login/login";
import SuggestionsCard from "./components/MiddleContent/suggestionsCard";
import user from "./assets/others/user_face_template.svg";

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
        <Route path="/login" element={<Login/>} />
      </Routes> */}
    </Router>
  );
};

export default AppRoute;
