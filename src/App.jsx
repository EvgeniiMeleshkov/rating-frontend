import LoginPage from '@/pages/Login'
import PasswordRecovery from '@/pages/PasswordRecovery'
import RegisterPage from '@/pages/register'
import ChangePassword from '@/pages/ChangePassword'
import Welcome from '@/pages/Welcome'

function App() {
  return (
    <>
      {Welcome}
      {RegisterPage}
      {LoginPage}
      {PasswordRecovery}
      {ChangePassword}
    </>
  )
}

export default App
