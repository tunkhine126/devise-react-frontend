import React, { useState } from 'react';
import axios from 'axios';

function Registration(props) {
  const { handleSuccessfulAuthorization } = props
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [registrationErrors, setRegistrationErrors] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    
    axios.post("http://localhost:3000/signup", {
      user: {
        email,
        password,
        password_confirmation
      }
    }
    ).then(response => {
      if (response.data.message === 'Signed up successfully.') {
        handleSuccessfulAuthorization(response.data)
      }
      console.log("Registration response:", response);
    })
    .catch(error => {
      setRegistrationErrors(error)
      console.log("Registration error:", error)
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
        <div className="flex flex-wrap mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password_confirmation">
              Password Confirmation
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="grid-first-name"
            type="password_confirmation"  
            placeholder="Password confirmation"
            onChange={(e) => setPassword_confirmation(e.target.value)}
            label="Password confirmation"
            />
          </div>
        </div>
        <button type="submit" className="inline-flex items-center ml-8 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Register
        </button>
      </form>
    </div>
  )
}

export default Registration