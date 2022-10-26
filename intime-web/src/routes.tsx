import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { HeaderApp } from './components/Header/header'
import Dashboard from './pages/Dashboard/dashboard'
import ActiveRoom from './pages/ActiveRoom/activeRoom'
import Login from './pages/Login/login'
import NotFound from './pages/NotFound/notFound'
import { useEffect, useState } from 'react'
import Protected from './protected'
import { ConvertStringToBool } from './utils/exports'
import RegisterUsers from './pages/RegisterUsers/registerUsers'
import { ToastContainer } from 'react-toastify'

const AppRoute = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('logged')?.toString() || 'false'
  )

  const clearStorage = () => {
    localStorage.clear()
    return true
  }

  useEffect(() => {
    isLoggedIn ? false : clearStorage() && setIsLoggedIn('false')
  }, [isLoggedIn])

  return isLoggedIn == 'true' ? (
    <Router>
      <ToastContainer />
      <Protected isLoggedIn={isLoggedIn}>
        <Routes>
          <Route
            path="/"
            element={
              <HeaderApp>
                <Dashboard />
              </HeaderApp>
            }
          />
          <Route
            path="/active-room"
            element={
              <HeaderApp>
                <ActiveRoom />
              </HeaderApp>
            }
          />
          <Route
            path="/dashboard"
            element={
              <HeaderApp>
                <Dashboard />
              </HeaderApp>
            }
          />
          <Route
            path="/register-users"
            element={
              <HeaderApp>
                <RegisterUsers />
              </HeaderApp>
            }
          />
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
  )
}

export default AppRoute
