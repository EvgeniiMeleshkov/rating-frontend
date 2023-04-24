import { Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import Profile from '@/pages/Profile'
import Header from '@/pages/Header'
import Notification from '@/pages/Notification'
import Experts from '@/pages/Experts'
import Competitors from '@/pages/Competitors'
import Rating from './pages/Rating'

function Protected () {
  return ( 
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/experts' element={<Experts/>} />
        <Route path='/competitors' element={<Competitors/>} />
        <Route path='/competitors/top' element={<Rating/>} />
      </Routes>  
    </>
  )
}

function Unprotected () {
  return  (
    <>
      <Header/>
    <Routes>
      <Route path='/login' element={LoginPage} />
      <Route path='/register' element={RegisterPage} />
      <Route path='/notification' element={<Notification/>} />
    </Routes>
    </>
  )
}

export {
  Protected,
  Unprotected
}
