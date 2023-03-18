import Form from '@/components/Form'
import Input from '@/components/Input'
import Button from '@/components/Button'
import auth from '@/lib/auth'

export default 
  <Form action="register" callback={auth.set(localStorage)}>
    <h1>Регистрация</h1>
    <Input type="text" name="email" />
    <Input type="password" name="password" label="пароль"/>
    <Input type="text" name="firstName" label="Имя" />
    <Input type="text" name="lastName" label="Фамилия" />
    <Button>Отправить</Button>
  </Form>
