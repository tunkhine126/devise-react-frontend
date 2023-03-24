import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/home'
import Dashboard from './components/dashboard'
import Login from './components/auth/Login';

function App() {

  const [loggedInStatus, setLoggedInStatus] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedInStatus(true)
    console.log('user data:', data)
    setUser(data.user)
  }

  return (
    <div className="App flex flex-col items-center justify-center p-6 m-auto md:h-screen pt:mt-0 dark:bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={ 
              <Home
                handleLogin={handleLogin}
                loggedInStatus={loggedInStatus}
              />
            } 
          />
          <Route 
            path="/dashboard"
            element={
              <Dashboard 
                user={user}
                loggedInStatus={loggedInStatus}
              />
            } 
          />
          <Route 
            path="/login"
            element={
              <Login
                handleLogin={handleLogin}
                loggedInStatus={loggedInStatus}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
