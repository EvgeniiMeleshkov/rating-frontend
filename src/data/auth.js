export const auth = {
  set (token) {
    localStorage.setItem('auth', token)
  },
  get: localStorage.auth
}
