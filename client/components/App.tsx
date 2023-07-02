import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

//Components
import Header from './Header'
import Landing from './Landing'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
