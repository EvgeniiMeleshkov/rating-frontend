import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'
import auth from '@/lib/auth'
import { NavLink } from 'react-router-dom'

export default
  <div className='auth-form'>
    <Form action='login' callback={auth.set(localStorage)}>
      <h1>
        Войти &nbsp;
        <NavLink to='/register'>Регистрация</NavLink>
      </h1>
      <Input type='text' name='email' label='Электронная почта' />
      <Input type='password' name='password' label='Пароль' />
      <Button className='btn-blue' disabled>Войти</Button>
    </Form>
  </div>
