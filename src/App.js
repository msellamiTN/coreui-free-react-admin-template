import React, { useState, useEffect, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [initiateur, setInitiateur] = useState({})
  useEffect(() => {
    // Check if the user is already authenticated
    const isAuthenticated = localStorage.getItem('authenticated')
    if (isAuthenticated) {
      setAuthenticated(true)
    }
  }, [])

  const onLogin = (initiateur) => {
    // Perform login logic and set authenticated to true
    setAuthenticated(true)
    setInitiateur(initiateur)
    localStorage.setItem('initiateur', initiateur)
    localStorage.setItem('authenticated', 'true')
  }

  const handleLogout = () => {
    // Perform logout logic and set authenticated to false
    setAuthenticated(false)
    localStorage.removeItem('authenticated')
  }

  return (
    <Router>
      <Suspense fallback={loading}>
        <Routes>
          <Route
            path="/login"
            element={authenticated ? <Navigate to="/" replace /> : <Login onLogin={onLogin} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/500" element={<Page500 />} />
          {authenticated ? (
            <Route path="/*" element={<DefaultLayout onLogout={handleLogout} />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
