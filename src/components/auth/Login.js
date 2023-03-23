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
      if (response.data.message === 'You are logged in.') {
        handleSuccessfulLogin(response.data)
      }
      console.log("Login response:", response);
    })
    .catch(error => {
      setLoginErrors(error.response.data.message)
      console.log("Login error:", error.response.data.message)
    })
  }

  return(
    <div className="px-2 sm:px4 items-center justify-center w-full h-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800">
      <div className="w-full p-6 space-y-8 sm:p-8 lg:p-16 lg:py-0 items-center justify-center">
        <h2 className="p-2 text-2xl text-center font-bold text-gray-900 lg:text-3xl dark:text-white">
          Sign in to platform 
        </h2>
        {loginErrors && (
        <div className="pb-3">
          <div className="bg-error pb-3 pt-3 flex justify-center">
            <div className="text-color-errorHeader text-sm text-white tracking-wide pt-2">
              <span role="img" aria-label="thinking_face">🤔</span>
              <span>{} {`${loginErrors}`}</span>
            </div>
          </div>
        </div>
      )}      
        <form className="m-8 p-4 space-y-6 items-center justify-center" onSubmit={handleSubmit}>
          <div className="flex flex-col mx-3 mb-2 items-center justify-center">
            <div className="w-full md:w-1/2 p-3 mb-3 md:mb-0">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                id="email"
                type="email"
                placeholder="Email..."
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                required
              />
            </div>
            <div className="w-full md:w-1/2 p-3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="grid-password">
                Password
              </label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              type="password" 
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              label="password"
              required
              />
            </div>
          </div>
          <div className="flex flex-col mx-3 mb-2w-full p-6 space-y-8 sm:p-8 lg:p-16 lg:py-0 items-center justify-center">
            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Login to your account
            </button>
          </div>
        </form>
        <div class="flex flex-row p-6 space-y-8 sm:p-8 lg:p-16 lg:py-0 items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
          Not registered? 
          <a href="/" class="text-primary-700 hover:underline dark:text-primary-500 pl-1 sm:pl-2">Create account</a>
        </div>
      </div>
    </div>
  )
}

export default Login