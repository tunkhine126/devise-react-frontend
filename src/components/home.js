import React from 'react';
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
    <div className="px-2 sm:px4 items-center justify-center w-full h-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 dark:bg-gray-800">
      <Registration handleSuccessfulAuthorization={handleSuccessfulAuthorization} />
    </div>
  )
}

export default Home