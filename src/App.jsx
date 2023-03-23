import { Routes, Route } from 'react-router-dom'
import ChangePassword from '@/pages/ChangePassword'
import LoginPage from '@/pages/Login'
import PasswordRecovery from '@/pages/PasswordRecovery'
import RegisterPage from '@/pages/Register'
import Welcome from '@/pages/Welcome'

function App () {
  return (
    <Routes>
      <Route path='/' element={Welcome} />
      <Route path='/register' element={RegisterPage} />
      <Route path='/login' element={LoginPage} />
      <Route path='/pass-recovery' element={PasswordRecovery} />
      <Route path='/change-pass' element={ChangePassword} />
    </Routes>
  )
}

export default App
