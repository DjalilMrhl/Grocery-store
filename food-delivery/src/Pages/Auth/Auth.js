import React from 'react'
import './Auth.scss'
import { Outlet } from 'react-router'


function Auth() {
  return (
    <section className="auth">
        <div className='auth--container'>
            <Outlet/>
        </div>
    </section>
  )
}

export default Auth