import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import API from '@/lib/api'
import Image from '@/components/Image'

export default function Profile () {
  if (!localStorage.auth) return <Navigate to='/login' />  
   
  const [user, setUser] = useState({})
  useEffect(()=>{
    const res = API.me()
      .then(res=>setUser(res))
  },[])  
  console.log(user) 
  const userStatus = (!user.expert && !user.admin) ? 'участник' : (user.expert && !user.admin) ? 'эксперт' : user.admin ? 'админ' : ''
    
  return (
  <div className='profile-style'>
    <h1>Странца пользователя</h1>
    <div className='one-x-three-greed'>
      <div className='div1-1x3'>
        <Image editable className='avatar' src={user.avatar} alt={user.firstName} />
      </div>
      <div className='div2-1x3'>
        <p>{userStatus}</p>
        <h2>{user.firstName} &nbsp; {user.lastName}</h2>
      </div>      
    </div>
  </div>
  )
}
