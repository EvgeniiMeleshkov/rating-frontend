import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'

export default
<div className='auth-form'>
  <Form action='changePass'>
    <h1>Ваш новый пароль</h1>
    <Input type='password' name='password' label='пароль' />
    <Button className='btn-blue'>Установить пароль</Button>
  </Form>
</div>
