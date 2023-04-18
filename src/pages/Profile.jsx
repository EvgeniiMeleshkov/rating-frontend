import { useEffect, useState } from 'react'
import API from '@/lib/api'
import Image from '@/components/Image'
import Button from '@/components/Button'
import clear from '@/lib/clear.js'
import Table from '../components/Table'

export default function Profile () {
  const [user, setUser] = useState({})
  
  useEffect(() => {
    API.me()
      .then(setUser)
      .catch(clear)
  }, [])

  return (
    <div className='container'>
    <div className='profile-style'>
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
          <ul>
            <li><h2>{user.firstName} &nbsp; {user.lastName}</h2></li>
            <li><h2>{user.email}</h2></li>
          </ul>
        </div>
      </div>
    </div>
    
    <Table/>
    </div>
  )
}


