import Button from '@/components/Button'
import Form from '@/components/Form'
import Input from '@/components/Input'

export default
  <div className='auth-form'>
    <Form action='passRecovery'>
      <h1>Восстановление пароля</h1>
      <Input type='text' name='email' />
      <Button className='btn-blue'>Отправить ссылку на почту</Button>
    </Form>
  </div>
