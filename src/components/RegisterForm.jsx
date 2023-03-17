export default function RegisterForm () {
  async function onSubmit (evt) {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const payload = Object.fromEntries(formData.entries())

    const res = await fetch ('/api/auth/register', {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(payload)
    })
  
    const token = await res.text()

    localStorage.setItem('token', token)
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
