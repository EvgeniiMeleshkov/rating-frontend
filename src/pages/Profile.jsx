import { useEffect, useState } from 'react'
import API from '@/lib/api'
import Image from '@/components/Image'
import Button from '@/components/Button'

export default function Profile () {
  const [user, setUser] = useState({})
  const clear = () => {
    localStorage.removeItem('auth')
    location.replace('/login')
  }
  useEffect(() => {
    API.me()
      .then(setUser)
      .catch(clear)
  }, [])

  return (
    <div className='profile-style'>
      <h1>Страница пользователя</h1>
      <Button onClick={clear} >LogOut</Button>
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


