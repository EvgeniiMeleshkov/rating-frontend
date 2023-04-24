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

function Protected () {

  const [user, setUser] = useState({})
  const [top, setTop] = useState([])

  const position = top.find(x => x.email === user.email)
  console.log(position)

  useEffect(()=>{
    API.getTop()
    .then(setTop)
    .catch(console.log)
  },[])

  useEffect(() => {
    if(top.length){
      API.me()
      .then(res => {
        const userInRating = top.find(x => x.email === res.email)
        setUser({
          ...res,
          position: userInRating.position
        })
      })
      .catch(clear)
    }
  },[top])

  return ( 
    <>
      <Header/>
      <Routes>
        <Route path='/profile' element={<Profile user={user} />} />
        <Route path='/experts' element={<Experts />} />
        <Route path='/competitors' element={<Competitors />} />
        <Route path='/competitors/top' element={<Rating top={top}/>} />
      </Routes>  
    </>
  )
}

function Unprotected () {
  return  (
    <>
      <Header/>
    <Routes>
      <Route path='/login' element={LoginPage} />
      <Route path='/register' element={RegisterPage} />
      <Route path='/notification' element={<Notification/>} />
    </Routes>
    </>
  )
}

export {
  Protected,
  Unprotected
}
