import { Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/Login'
import PasswordRecovery from '@/pages/PasswordRecovery'
import RegisterPage from '@/pages/Register'
import Profile from '@/pages/Profile'
import Header from '@/pages/Header'
import Notification from '@/pages/Notification'

function Protected () {
  return ( 
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>  
    </>
  )
}

function Unprotected () {
  return  (
    <>
      <Header/>
    <Routes>
      <Route path="/login" element={LoginPage} />
      <Route path="/register" element={RegisterPage} />
      <Route path="/recovery" element={PasswordRecovery} />
      <Route path="/notification" element={<Notification/>} />
    </Routes>
    </>
  )
}

export {
  Protected,
  Unprotected
}
