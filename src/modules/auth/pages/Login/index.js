import React from 'react'
import Login from '@modules/auth/containers/Login'
import GoToSignup from '@modules/auth/containers/GoToSignup'

export default () => (
  <div className="central-container">
    <Login />
    <GoToSignup />
  </div>
)
