import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import Profile from '@/pages/Profile'
import Header from '@/pages/Header'
import Notification from '@/pages/Notification'
import Experts from '@/pages/Experts'
import Competitors from '@/pages/Competitors'
import Rating from '@/pages/Rating'
import API from '@/lib/api.js'
import clear from '@/lib/clear.js'
import Mark from './pages/Mark'
import Settings from './pages/Settings'
import MarkTypes from './pages/MarkTypes'

function Protected () {
  const [user, setUser] = useState({})
  const [top, setTop] = useState([])

  const [competitors, setCompetitors] = useState([])
  useEffect(() => {
    API.getCompetitors()
      .then(setCompetitors)
      .catch(console.log)
  }, [])

  // const position = top.find(x => x.email === user.email)

  useEffect(() => {
    API.getTop()
      .then(setTop)
      .then(res => {
        const userInRating = top.find(x => x.email === res.email)
        setUser({
          ...res,
          position: userInRating.position
        })
      })
      .catch(console.log)
  }, [])

  useEffect(() => {
    API.me()
      .then(setUser)
      .catch(clear)
  }, [top])

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/experts' element={<Experts />} />
        <Route path='/competitors' element={<Competitors competitors={competitors} />} />
        <Route path='/top' element={<Rating top={top.slice(0, 10)} />} />
        <Route path='/mark' element={<Mark expert={user} competitors={competitors} />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/settings/mark-types' element={<MarkTypes />} />
      </Routes>
    </>
  )
}

function Unprotected () {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/login' element={LoginPage} />
        <Route path='/register' element={RegisterPage} />
        <Route path='/notification' element={<Notification />} />
      </Routes>
    </>
  )
}

export {
  Protected,
  Unprotected
}
