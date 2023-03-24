import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Protected, Unprotected } from '@/App'
import '@/index.css'

const root = document.querySelector('#root')
const navigate = url => history.pushState(null, null, url)
const path = location.pathname
const search = new URLSearchParams(location.search)
const token = search.get('token')
if (token) localStorage.auth = search.get('token')

const render = (url, xs) => Component => {
  
  if (xs.includes(path)) navigate(path)
  else navigate(url)

  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </React.StrictMode>
  )
}

const renderLogin = render('/login', ['/login', '/register'])
const renderProfile = render('/', ['/'])

if (!localStorage.auth) renderLogin(Unprotected)
else renderProfile(Protected)
