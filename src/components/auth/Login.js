import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Login(props) {
  const { handleLogin } = props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginErrors, setLoginErrors] = useState('');
  let navigate = useNavigate()

  const handleSuccessfulLogin = (data) => {
    handleLogin(data)
    navigate("/dashboard")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post("http://localhost:3000/login", {
      user: {
        email,
        password,
      }
    }
    ).then(response => {
      if (response.data.message === 'Signed up successfully.') {
        handleSuccessfulLogin(response.data)
      }
      console.log("Login response:", response);
    })
    .catch(error => {
      setLoginErrors(error)
      console.log("Login error:", error)
    })
  }


  return(
    <div className="">
    <form className="w-full max-w-lg mx-auto my-20" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
              id="grid-email"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password">
              Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="grid-password"
            type="text" 
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            label="password"
            />
          </div>
        </div>
        <button type="submit" className="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login