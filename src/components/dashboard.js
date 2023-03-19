import React, { Component } from 'react';

const Dashboard = (props) => {
  const { loggedInStatus, user } = props
  return(
    <div>
      <h1 className="text-3xl font-bold underline text-center">
        DASHBOARD
      </h1>
      <h2>Logged in status: {`${loggedInStatus}`}</h2>
      <h2>User: {`${user.email}`}</h2>
    </div>
  )
}

export default Dashboard