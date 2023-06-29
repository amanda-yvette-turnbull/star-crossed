//View template
import React from 'react'
import { Outlet } from 'react-router-dom'

import Nav from './Nav'

function App() {
  //add variables
  return (
    <>
      <div className="container">
        <Nav />
        <Outlet />
      </div>
    </>
  )
}

export default App
