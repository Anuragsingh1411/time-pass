import { useContext, useState } from 'react'
import React from 'react'
import { BrowserRouter as Router ,Routes, Route , Navigate } from 'react-router-dom'
import  { AuthProvider, AuthContext } from './context/AuthContext.jsx'
import Navbar from './components/Navbar'
import Login from './pages/Login.jsx'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'


const AppRoutes = () => {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={user ? <Dashboard /> :<Navigate to="/Login" />  } />
      <Route path="/Login" element={ <Login />} />
      <Route path="/Register" element={ <Register />} />
    </Routes>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <AppRoutes/>
      </Router>
    </AuthProvider>
  );
};

export default App;
