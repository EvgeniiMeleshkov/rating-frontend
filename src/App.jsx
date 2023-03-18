import LoginPage from '@/pages/Login'
import PasswordRecovery from '@/pages/PasswordRecovery';
import RegisterPage from '@/pages/register'
import ChangePassword from '@/pages/ChangePassword';

function App() {
  return (
    <>
      {RegisterPage}
      {LoginPage}
      {PasswordRecovery}
      {ChangePassword}
    </>
  )
}

export default App
