import { useEffect, useState } from 'react'
import Table from '@/components/Table'

export default function Rating (props) {
  const {top} = props

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
                <td>{x.position}</td>
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