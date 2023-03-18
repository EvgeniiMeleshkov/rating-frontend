import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'
import auth from '@/lib/auth'

export default
  <Form action='login' callback={auth.set(localStorage)}>
    <h1>Войти</h1>
    <Input type='text' name='email' />
    <Input type='password' name='password' label='пароль' />
    <Button>Войти</Button>
  </Form>
