import Form from '@/components/Form'
import Input from '@/components/Input'
import Button from '@/components/Button'
import auth from '@/lib/auth'
import { NavLink } from 'react-router-dom'

export default
  <div className='auth-form'>
    <Form action='register' 
      callback={auth.set(localStorage)}
      redirect="/"
    >
      <h1>
        Регистрация &nbsp;
        <NavLink to='/login'>Вход</NavLink>
      </h1>
      <Input type='text' name='email' label='Электронная почта' />
      
      <Input type='text' name='firstName' label='Имя' />
      <Input type='text' name='lastName' label='Фамилия' />
      <Button className='btn-blue'>Зарегистрироваться</Button>
    </Form>
  </div>
