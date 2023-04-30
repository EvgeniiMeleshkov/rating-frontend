import { useState } from 'react'
import Profile from '@/pages/Profile.jsx'
import Input from '@/components/Input.jsx'
import MarkForm from '@/pages//MarkForm'

export default function Mark (props) {

  const {competitors} = props

  const [lookUp, setLookUp] = useState([])
  const [value, setValue] = useState('')
  const [user, setUser] = useState({})

  function search (e) {
    setValue(e.target.value)
    const val = e.target.value.trim()
    setLookUp(competitors.filter(x => {
      return x.firstName.toLowerCase().includes(val.toLowerCase()) 
      || x.lastName.toLowerCase().includes(val.toLowerCase())
    }))
    
    if(val === '') {
      setLookUp([])
    }
  }

  function select (x) {
    setUser(x)
    setLookUp([])
    setValue('')
  }

  return (
    <div className="container">
      <div className="profile-style">
        <Input value={value} onChange={search} placeholder='Поиск по участникам' />
        <div>
          {lookUp.map((x, idx)=>{
            return (
              <ul key={idx}>
                <li onClick={()=>select(x)}>{x.firstName} {x.lastName}</li>
              </ul>
            )})
          }
        </div>
        {user._id && <>
          <Profile mark user={user}/>
        
          <MarkForm/>
        </>
        }
      </div>
    </div>
  )
}