export default function LoginForm () {
  async function onSubmit (evt) {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const payload = Object.fromEntries(formData.entries())
    
    const res = await fetch ('/api/auth/login', {
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
    <h2>Login</h2>
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <button>Войти</button>
    </form>
    </>
  )
}

