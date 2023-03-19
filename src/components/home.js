import React, {Component} from 'react';
import Registration from './auth/registration';
import { useNavigate } from 'react-router-dom'

function Home(props) {

  const { loggedInStatus, handleLogin } = props
  let navigate = useNavigate()
  
  const handleSuccessfulAuthorization = (data) => {
    handleLogin(data)
    navigate("/dashboard")
  }

  return(
    <div>
      <h1 className="text-3xl font-bold underline text-center">
        Hello world!
      </h1>
      <h2>Logged in status: {`${loggedInStatus}`}</h2>
      <Registration handleSuccessfulAuthorization={handleSuccessfulAuthorization} />
    </div>
  )
}

export default Home