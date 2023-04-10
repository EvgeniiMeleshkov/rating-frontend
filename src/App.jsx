import { Routes, Route } from 'react-router-dom'
import ChangePassword from '@/pages/ChangePassword'
import LoginPage from '@/pages/Login'
import PasswordRecovery from '@/pages/PasswordRecovery'
import RegisterPage from '@/pages/Register'
import Profile from '@/pages/Profile'

function Protected () {
  return <Routes>
    <Route path="/" element={<Profile />} />
  </Routes>
}

function Unprotected () {
  return <Routes>
    <Route path="/login" element={LoginPage} />
    <Route path="/register" element={RegisterPage} />
    <Route path="/recovery" element={PasswordRecovery} />
  </Routes>
}

export {
  Protected,
  Unprotected
}
