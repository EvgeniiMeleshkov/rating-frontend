import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import API from '@/lib/api'
import Image from '@/components/Image'

export default function Profile () {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    API.me().then(setUser).catch(
      () => {
        localStorage.removeItem('auth')
        location.replace('/login')
      }
    )
  }, [])

  return (
    <div className='profile-style'>
      <h1>Страница пользователя</h1>
      <div className='one-x-three-greed'>
        <div className='div1-1x3'>
          <Image 
            editable 
            className='avatar' 
            src={user.avatar} 
            alt={user.firstName} 
          />
        </div>
        <div className='div2-1x3'>
          <h2>{user.firstName} &nbsp; {user.lastName}</h2>
        </div>
      </div>
    </div>
  )
}


