import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/hooks'

//Components
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default App
