import { register } from '../api/API'
import getFormData from '../utils/getFormData.js'
import { auth } from '../data/auth.js'
 
export default function RegisterForm () {
  async function onSubmit (evt) {
    evt.preventDefault()
    const payload = getFormData(evt.target)
    const res = await register(JSON.stringify(payload))
  
    console.log(res)
    auth.set(res)
  }

  return (
    <>
    <h2>Register</h2>
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="firstName" placeholder="Имя" />
      <input type="text" name="lastName" placeholder="Фамилия" />
      <button>Регистрация</button>
    </form>
    </>
  )
}
