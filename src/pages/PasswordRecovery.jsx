import Button from '@/components/Button';
import Form from '@/components/Form';
import Input from '@/components/Input';

export default 
<>
  <Form action="passRecovery" >
    <h1>восстановление пароля</h1>
    <Input type="text" name="email" />
    <Button>Отправить ссылку на почту</Button>
  </Form> 
</>
