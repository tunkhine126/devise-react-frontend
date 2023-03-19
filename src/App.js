import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Dashboard from './components/dashboard'
import Login from './components/auth/Login';

function App() {

  const [loggedInStatus, setLoggedInSatus] = useState(false)
  const [user, setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedInSatus(true)
    setUser(data.user)
  }

  return (
    <div className="App">
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
