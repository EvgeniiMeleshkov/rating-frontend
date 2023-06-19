import { useEffect, useState } from 'react'
import Table from '@/components/Table'
import API from '@/lib/api'

export default function Experts () {
  const [experts, setExperts] = useState([])
  useEffect(() => {
    API.getExperts()
      .then(setExperts)
      .catch(console.log)
  }, [])

  return (
    <div className='container'>
      <Table
        label='Эксперты'
        head={
          <>
            <td />
            <td>Почта</td>
            <td>Имя</td>
            <td>Фамилия</td>
          </>
        }
        children={experts.map((x, idx) => {
          return (
            <tr key={idx}>
              <td><img className='avatar small' src={x.avatar} /></td>
              <td>{x.email}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
            </tr>
          )
        })}
      />
    </div>
  )
}
