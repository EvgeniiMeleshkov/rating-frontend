import { useEffect, useState } from 'react'
import Table from '@/components/Table'
import API from '@/lib/api'

export default function Rating () {

  const [top, setTop] = useState([])

  useEffect(()=>{
    API.getTop()
    .then(setTop)
    .catch(console.log)
  },[])
  
  return (
    <div className="container">
      <Table head='Топ 10 участников'>
        <tr>
          <td></td>
          <td>Позиция</td>
          <td>Сумма</td>
          <td>Почта</td>
          <td>Имя</td>
          <td>Фамилия</td>
        </tr>
          {top.map((x,idx)=>{
            return (
              <tr key={idx}>
                <td><img className='avatar small' src={x.avatar}/></td>
                <td>{idx + 1}</td>
                <td>{x.sum}</td>
                <td>{x.email}</td>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
              </tr>
            )
          })}
      </Table>
    </div>
  )
}