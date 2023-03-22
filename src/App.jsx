import { Routes, Route } from 'react-router-dom'
import ChangePassword from '@/pages/ChangePassword'
import LoginPage from '@/pages/Login'
import PasswordRecovery from '@/pages/PasswordRecovery'
import RegisterPage from '@/pages/Register'
import Profile from '@/pages/Profile';

function App () {
  return (
    <Routes>
      <Route path='/' element={<Profile/>} />
      <Route path='/register' element={RegisterPage} />
      <Route path='/login' element={LoginPage} />
      <Route path='/passRecovery' element={PasswordRecovery} />
      <Route path='/changePass' element={ChangePassword} />
    </Routes>
  )
}

export default App
